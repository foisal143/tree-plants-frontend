import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { RouterProvider } from 'react-router-dom';
import route from './routes/routes.tsx';
import { Provider } from 'react-redux';
import store, { persistor } from './Redux/store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={route} />
        <Toaster />
      </PersistGate>
    </Provider>
  </StrictMode>
);
