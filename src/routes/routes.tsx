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
import DashboardLayout from '../layouts/DashboardLayout';
import UserHome from '../pages/Dashboard/User/UserHome/UserHome';
import MyOrders from '../pages/Dashboard/User/MyOrders/MyOrders';
import AdminHome from '../pages/Dashboard/Admin/AdminHome/AdminHome';
import ManageOrders from '../pages/Dashboard/Admin/ManageOrders/ManageOrders';
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers/ManageUsers';
import ManageProducts from '../pages/Dashboard/Admin/ManageProducts/ManageProducts';
import AddProduct from '../pages/Dashboard/Admin/AddProduct/AddProduct';
import EditProduct from '../pages/Dashboard/Admin/EditProduct/EditProduct';
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
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'user-home',
        element: <UserHome />,
      },
      {
        path: 'my-orders',
        element: <MyOrders />,
      },
      // admin routes
      {
        path: 'admin-home',
        element: <AdminHome />,
      },
      {
        path: 'manage-orders',
        element: <ManageOrders />,
      },
      {
        path: 'manage-users',
        element: <ManageUsers />,
      },
      {
        path: 'manage-products',
        element: <ManageProducts />,
      },
      {
        path: 'manage-products/:id',
        element: <EditProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/products/${params.id}`),
      },
      {
        path: 'add-product',
        element: <AddProduct />,
      },
    ],
  },
]);

export default route;
