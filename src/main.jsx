import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import App from './App.jsx';
import OpethProvider from './context/OpethProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <OpethProvider>
        <App />
      </OpethProvider>
    </BrowserRouter>
  </StrictMode>,
);
