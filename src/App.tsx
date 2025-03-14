import { ReactElement } from 'react';
import { Router } from './router';
import { ErrorBoundary } from './components/ErrorBoundary';

export const App = (): ReactElement => {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
};
