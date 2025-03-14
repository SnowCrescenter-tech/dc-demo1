import React from 'react';
import { motion } from 'framer-motion';
import { errorLogger } from '../utils/errorUtils';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    errorLogger.handleError(error, errorInfo.componentStack, {
      type: 'react_error_boundary',
      component: this.constructor.name
    });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center min-h-[200px] p-6 text-center"
        >
          <div className="text-xl font-semibold text-gray-900 mb-2">
            页面出现了一些问题
          </div>
          <div className="text-sm text-gray-600 mb-4">
            {this.state.error?.message || '应用遇到了未知错误'}
          </div>
          <div className="space-x-4">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              刷新页面
            </button>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.history.back();
              }}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              返回上一页
            </button>
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

// 包装高阶组件，用于方便地为任何组件添加错误边界
export const withErrorBoundary = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  fallbackUI?: React.ReactNode
) => {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary fallback={fallbackUI}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
};

// 错误提示组件
export const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-[200px] p-6 text-center"
    >
      <div className="text-xl font-semibold text-gray-900 mb-2">
        组件加载失败
      </div>
      <div className="text-sm text-gray-600 mb-4">
        {error.message || '发生了未知错误'}
      </div>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        重试
      </button>
    </motion.div>
  );
};
