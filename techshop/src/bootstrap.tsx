import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </React.StrictMode>,
  );
}
