import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App';
import './assets/style/index.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
