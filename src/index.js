import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { ClientAuthProvider } from './context/ClientAuthContext';
import { DeclarantAuthProvider } from './context/DeclarantAuthContext';
import { store } from './redux/store';
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <ClientAuthProvider>
            <DeclarantAuthProvider>
              <AppRoutes />
            </DeclarantAuthProvider>
          </ClientAuthProvider>
        </Provider>
      </BrowserRouter>
  </React.StrictMode>
);
