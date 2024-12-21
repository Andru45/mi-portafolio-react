import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tu archivo de estilos globales
import App from './App';
import reportWebVitals from './reportWebVitals';

// Importamos las fuentes desde Google Fonts
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si deseas medir el rendimiento de tu app, usa este método
reportWebVitals();
