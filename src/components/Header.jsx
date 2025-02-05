import { useState } from 'react';
import { NavLink } from 'react-router';
import { navLinks } from '../constants';

const NavItems = ({ containerClassNames, closeMenu }) => {
  return (
    <ul className={`flex gap-[57px] || ${containerClassNames}`}>
      {navLinks.map((item) => (
        <li key={item.id} className="nav-links">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'font-bold' : 'font-normal'
            }
            to={item.href}
            onClick={closeMenu}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const closeNavigation = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 shadow-custom overflow-x-clip backdrop-blur-lg">
        <div className="flex justify-between items-center relative">
          <div className="bg-s1 sm:w-[270px] sm:h-[88px] shadow-custom flex justify-center items-center">
            <img src="/logo.png" width={120} height={71} alt="Header Logo" />
          </div>

          <nav className="hidden xl:flex lg:ml-9">
            <NavItems />
          </nav>

          <div className="hidden xl:flex gap-[60px] items-center xl:ml-5">
            <a
              href="/waitlist"
              className="nav-links font-bold text-white pt-4 pb-3 px-8 bg-s1 border-none rounded-[99px]"
            >
              JOIN WAITING LIST
            </a>
            {/* <img src="/profile.png" width={40} height={40} alt="Profile" /> */}
          </div>

          <button onClick={toggleMenu}>
            <img
              src={isOpen ? '/close.svg' : 'menu.svg'}
              width={40}
              height={40}
              alt="Hamburger menu"
              className="xl:hidden"
            />
          </button>
        </div>
      </header>
      <div className="lg:hidden fixed top-[88px] max-sm:top-[46px] w-full bg-white shadow-custom z-50">
        {isOpen && (
          <NavItems
            containerClassNames="flex flex-col gap-8 p-6 max-sm:p-5"
            closeMenu={closeNavigation}
          />
        )}
      </div>
    </>
  );
};

export default Header;
