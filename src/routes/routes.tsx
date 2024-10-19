import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Products from '../pages/Products/Products';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import ContactPage from '../pages/ContactPage/ContactPage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import CartPage from '../pages/CartPage/CartPage';
import PaymentPage from '../pages/PaymentPage/PaymentPage';

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/products/${params.id}`),
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/payments/:price',
        element: <PaymentPage />,
      },
    ],
  },
]);

export default route;
