import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import AuthProvider from './contexts/auth/Provider';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
