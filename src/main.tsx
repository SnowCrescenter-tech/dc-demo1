import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { errorLogger } from './utils/errorUtils';
import './index.css';

// 初始化错误处理
if (import.meta.env.DEV) {
  // 全局错误处理器
  window.onerror = (message, source, lineno, colno, error) => {
    errorLogger.handleError(error || new Error(String(message)), undefined, {
      type: 'global_error',
      source,
      lineno,
      colno
    });
    return false;
  };

  // Promise 错误处理器
  window.onunhandledrejection = (event) => {
    errorLogger.handleError(
      event.reason instanceof Error ? event.reason : new Error(String(event.reason)),
      undefined,
      {
        type: 'unhandled_rejection'
      }
    );
  };

  // 开发工具检查
  const hasDevTools = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hasDevTools) {
    console.log(
      '%c💡 提示',
      'font-weight: bold; font-size: 12px; color: #3b82f6;',
      '安装React开发者工具可以获得更好的开发体验：https://reactjs.org/link/react-devtools'
    );
  }

  // 打印环境信息
  console.log(
    '%c🚀 应用启动',
    'font-weight: bold; font-size: 12px; color: #3b82f6;',
    `\n- 环境：${import.meta.env.MODE}\n- 版本：${import.meta.env.VITE_APP_VERSION || '开发版'}`
  );
}

// 在开发环境下启用严格模式
const Root = import.meta.env.DEV ? React.StrictMode : React.Fragment;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Root>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Root>
);
