import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AmbienceProvider } from './context/AmbienceContext';
import './styles/tokens.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AmbienceProvider>
      <App />
    </AmbienceProvider>
  </React.StrictMode>
);

