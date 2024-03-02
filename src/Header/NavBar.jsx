import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import Dropdown from './Dropdown';

function NavBar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navStyle = {
    backgroundColor: scrolling ? '#EBF8F8' : 'transparent',
    transition: 'background-color 0.3s ease',
  };

  const ulStyle = {
    color: scrolling ? 'black' : 'white',
    transition: 'color 0.3s ease',
  };

  return (
    <>
      <nav
        className="flex justify-evenly fixed top-0 left-0 w-full z-30 border-b border-gray-300"
        style={navStyle}
      >
        <img src={logo} className="w-24 h-24" alt="Logo" />
        <ul
          className="flex gap-10 items-center text-white text-xl font-semibold"
          style={ulStyle}
        >
          <li>
            <a href="https://www.ctmkmobiledetailing.com/" target='blank_' className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-blue-400">
              Ceramic Coating
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}


export default NavBar;
