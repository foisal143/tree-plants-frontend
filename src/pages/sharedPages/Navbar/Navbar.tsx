/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react';
import Container from '../../../components/Container';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks/hooks';
import { useSingleUserQuery } from '../../../Redux/features/user/userApis';
import { logout } from '../../../Redux/features/auth/authSlice';
import { FaBars, FaShoppingCart } from 'react-icons/fa';
import { useGetCartByEmailQuery } from '../../../Redux/features/cart/cartApis';
import { FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const paths = ['/', '/about', '/contact'];
  const { pathname } = useLocation();
  const { user: userInfo } = useAppSelector(state => state.tree_plant_auth);
  const dispatch = useAppDispatch();
  // @ts-ignore
  const userRes = useSingleUserQuery(userInfo?.email);
  const user = userRes?.data?.data;
  const { data: cartRes } = useGetCartByEmailQuery(user?.email);
  const cartData = cartRes?.data;

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed w-full  top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg'
          : `bg-transparent  ${paths.includes(pathname) && 'text-white'}`
      } `}
    >
      <Container>
        <div className="flex relative h-20 justify-between items-center gap-10">
          <div>
            <Link to="/">
              <img
                className="w-14 h-14 rounded-full"
                src="/public/logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <div
            className={`bg-white ${
              !toggleMenu ? '-left-[1250px]' : 'left-0'
            } lg:relative lg:top-0 absolute top-20 left-0 transition-all duration-300 rounded-md lg:bg-transparent p-5 lg:p-0 lg:w-fit lg:text-inherit w-full text-center text-black`}
          >
            <ul className="lg:flex space-y-5 lg:space-y-0  items-center navlink gap-5">
              <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/about'}>About</NavLink>
              </li>
              <li>
                <NavLink to={'/products'}>Products</NavLink>
              </li>
              <li>
                <NavLink to={'/contact'}>Contact Us</NavLink>
              </li>
              {user && (
                <li>
                  <NavLink
                    to={
                      user?.role === 'user'
                        ? '/dashboard/user-home'
                        : '/dashboard/admin-home'
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <div>
            {userInfo ? (
              <div className="flex relative items-center gap-5">
                <button
                  className="w-fit lg:hidden cursor-pointer"
                  onClick={() => setToggleMenu(!toggleMenu)}
                >
                  {toggleMenu ? (
                    <FaXmark className="text-3xl" />
                  ) : (
                    <FaBars className="text-3xl" />
                  )}
                </button>
                <div className="relative">
                  <Link to="/cart">
                    <FaShoppingCart className="text-3xl " />
                  </Link>
                  <div className="absolute -top-2 bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full -right-3">
                    {cartData?.length}
                  </div>
                </div>
                <img
                  onClick={() => setToggleProfile(!toggleProfile)}
                  className="w-12 cursor-pointer border h-12 rounded-full"
                  src={user?.image}
                  alt=""
                />
                <div
                  className={`p-5 rounded-lg bg-white absolute -left-16 top-12 ${
                    toggleProfile ? 'block' : 'hidden'
                  }`}
                >
                  <button
                    onClick={() => dispatch(logout())}
                    className="btn-primary"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn-primary">Login</button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
