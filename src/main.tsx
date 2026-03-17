import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './layout/base.css';
import App from './app.tsx';
import { BrowserRouter } from 'react-router-dom';

// This component connects the React application to the HTML document.
// Place Routes or Global Context Providers here if needed in the future.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
