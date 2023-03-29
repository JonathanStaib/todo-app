import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ToDoContext from './Context/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <ToDoContext>
        <App />
      </ToDoContext>
    </MantineProvider>
  </React.StrictMode>
);
