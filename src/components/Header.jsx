import { useState } from 'react';
import { NavLink } from 'react-router';
import { navLinks } from '../constants';

const NavItems = () => {
  return (
    <ul className="flex gap-[57px]">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-links">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'font-bold' : 'font-normal'
            }
            to={item.href}
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-custom overflow-x-clip backdrop-blur-lg">
      <div className="flex justify-between items-center">
        <div className="bg-s1 sm:w-[353px] sm:h-[88px] shadow-custom flex justify-center items-center">
          <img src="/logo.png" width={181} height={71} alt="Header Logo" />
        </div>

        <nav className="hidden xl:flex lg:ml-9">
          <NavItems />
        </nav>

        <div className="hidden xl:flex xl:translate-x-[200px] gap-[60px] items-center xl:mr-5">
          <button className="nav-links font-bold text-white pt-4 pb-3 px-8 bg-s1 border-none rounded-[99px]">
            JOIN WAITING LIST
          </button>
          <img src="/profile.png" width={40} height={40} alt="Profile" />
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
  );
};

export default Header;
