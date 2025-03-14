import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ErrorBoundary, ErrorFallback } from './components/ErrorBoundary';
import { Layout } from './components/Layout';
import { withErrorBoundary } from './components/ErrorBoundary';
import { motion } from 'framer-motion';

// 加载中组件
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <motion.div
      className="w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </div>
);

// 页面组件包装器
const withPage = (Component: React.ComponentType) => {
  const WrappedComponent = withErrorBoundary(Component);
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <WrappedComponent />
    </Suspense>
  );
};

// 懒加载页面组件
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Events = lazy(() => import('./pages/Events').then(module => ({ default: module.Events })));
const Bus = lazy(() => import('./pages/Bus').then(module => ({ default: module.Bus })));
const Venues = lazy(() => import('./pages/Venues').then(module => ({ default: module.Venues })));
const Canteen = lazy(() => import('./pages/Canteen').then(module => ({ default: module.Canteen })));
const Map = lazy(() => import('./pages/Map').then(module => ({ default: module.Map })));

// 路由配置
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorFallback error={new Error('路由错误')} resetErrorBoundary={() => window.location.href = '/'} />,
    children: [
      {
        index: true,
        element: withPage(Home),
      },
      {
        path: 'events',
        element: withPage(Events),
      },
      {
        path: 'bus',
        element: withPage(Bus),
      },
      {
        path: 'venues',
        element: withPage(Venues),
      },
      {
        path: 'canteen',
        element: withPage(Canteen),
      },
      {
        path: 'map',
        element: withPage(Map),
      }
    ],
  }
], {
  future: {
    // Enable React Router v7 features
    // Remove features that are not yet available in your version
    // v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});

export const Router = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};
