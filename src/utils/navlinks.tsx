import { NavLink } from 'react-router-dom';

export const userLinks = (
  <>
    <li>
      <NavLink to="/dashboard/user-home">User Home</NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/my-orders">My Orders</NavLink>
    </li>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/products">Products</NavLink>
    </li>
  </>
);
export const adminLinks = (
  <>
    <li>
      <NavLink to="/dashboard/admin-home">Admin Home</NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/add-product">Add Product</NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/manage-users">Manage User</NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/manage-orders">Manage Orders</NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/manage-products">Manage Products</NavLink>
    </li>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
  </>
);
