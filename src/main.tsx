import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { RouterProvider } from 'react-router-dom';
import route from './routes/routes.tsx';
import { Provider } from 'react-redux';
import store from './Redux/store/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </StrictMode>
);
