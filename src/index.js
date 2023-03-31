import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import AuthProvider from './Context/Auth';
import SettingsProvider from './Context/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider>
     <AuthProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
     </AuthProvider>
    </MantineProvider>
  </React.StrictMode>
);
