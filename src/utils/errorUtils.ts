interface ErrorDetails {
  message: string;
  stack?: string;
  componentStack?: string;
  context?: Record<string, unknown>;
}

class ErrorLogger {
  private static instance: ErrorLogger;
  private isInitialized = false;

  private constructor() {
    if (!this.isInitialized) {
      this.setupErrorListeners();
      this.isInitialized = true;
    }
  }

  public static getInstance(): ErrorLogger {
    if (!ErrorLogger.instance) {
      ErrorLogger.instance = new ErrorLogger();
    }
    return ErrorLogger.instance;
  }

  private setupErrorListeners() {
    // 捕获未处理的Promise错误
    window.addEventListener('unhandledrejection', (event) => {
      this.logError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        context: {
          type: 'unhandledrejection',
          timestamp: new Date().toISOString()
        }
      });
    });

    // 捕获运行时错误
    window.addEventListener('error', (event) => {
      this.logError({
        message: event.message,
        stack: event.error?.stack,
        context: {
          type: 'runtime',
          filename: event.filename,
          lineNo: event.lineno,
          colNo: event.colno,
          timestamp: new Date().toISOString()
        }
      });
    });
  }

  public logError(error: ErrorDetails) {
    // 在开发环境下打印错误
    if (import.meta.env.DEV) {
      console.error('🚨 Error:', {
        message: error.message,
        stack: error.stack,
        componentStack: error.componentStack,
        context: error.context,
        timestamp: new Date().toISOString()
      });
    }

    // 在生产环境下可以将错误发送到服务器
    if (import.meta.env.PROD) {
      // TODO: 实现错误上报逻辑
      // this.sendErrorToServer(error);
    }
  }

  public handleError(error: Error, componentStack?: string, context?: Record<string, unknown>) {
    this.logError({
      message: error.message,
      stack: error.stack,
      componentStack,
      context: {
        ...context,
        timestamp: new Date().toISOString()
      }
    });
  }
}

// 导出单例实例
export const errorLogger = ErrorLogger.getInstance();

// 用于包装异步函数的工具函数
export const withErrorHandling = <T extends (...args: any[]) => Promise<any>>(
  fn: T,
  context?: Record<string, unknown>
): T => {
  return (async (...args: Parameters<T>) => {
    try {
      return await fn(...args);
    } catch (error) {
      errorLogger.handleError(error as Error, undefined, {
        ...context,
        functionName: fn.name,
        arguments: args
      });
      throw error;
    }
  }) as T;
};

// 全局错误处理装饰器（用于类方法）
export function handleErrors(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    try {
      return await originalMethod.apply(this, args);
    } catch (error) {
      errorLogger.handleError(error as Error, undefined, {
        className: target.constructor.name,
        methodName: propertyKey,
        arguments: args
      });
      throw error;
    }
  };

  return descriptor;
}
