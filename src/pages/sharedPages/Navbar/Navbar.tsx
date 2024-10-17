import { useEffect, useState } from 'react';
import Container from '../../../components/Container';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const paths = ['/', '/about', '/contact'];
  const { pathname } = useLocation();
  const user = null;
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
        <div className="flex h-20 justify-between items-center gap-10">
          <div>
            <Link to="/">
              <img
                className="w-14 h-14 rounded-full"
                src="/public/logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <div>
            <ul className="flex items-center navlink gap-5">
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
              <li>
                <NavLink to={'/blog'}>Blog</NavLink>
              </li>
            </ul>
          </div>
          <div>
            {user ? (
              <button className="btn-primary">Logout</button>
            ) : (
              <button className="btn-primary">Login</button>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
