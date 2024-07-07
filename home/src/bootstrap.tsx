import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App';
import './assets/style/index.css';
import { ErrorBoundary } from 'react-error-boundary';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ErrorBoundary fallback={<div>Something is wrong...</div>}>
        <App />
      </ErrorBoundary>
    </React.StrictMode>,
  );
}
