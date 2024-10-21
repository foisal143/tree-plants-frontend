/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAppSelector } from '../Redux/hooks/hooks';

const DashboardLayout = () => {
  const user = useAppSelector(state => state.tree_plant_auth.user);
  const userLinks = (
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
  const adminLinks = (
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
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className=" btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className=" menu space-y-5 dashboard bg-green-100 font-semibold text-base-content min-h-full w-80 p-4">
          <Link to="/">
            {' '}
            <p className="flex items-center gap-3">
              <img
                className=" w-14 h-14 rounded-full"
                src="/public/logo.png"
                alt=""
              />
              <h3 className="text-xl font-semibold font-headerFont">
                Tree Plants
              </h3>
            </p>
          </Link>
          {/* Sidebar content here */}
          {
            // @ts-ignore
            user?.role === 'user' ? userLinks : adminLinks
          }
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
