import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { ClientAuthProvider } from './context/ClientAuthContext';
import { DeclarantAuthProvider } from './context/DeclarantAuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
      <BrowserRouter>
        <ClientAuthProvider>
          <DeclarantAuthProvider>
            <AppRoutes />
          </DeclarantAuthProvider>
        </ClientAuthProvider>
      </BrowserRouter>
  </React.StrictMode>
);
