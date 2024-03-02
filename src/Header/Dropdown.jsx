import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const showDropdown = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const hideDropdownWithDelay = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      hoverTimeoutRef.current = null;
    }, 500);
  };

  return (
    <div onMouseEnter={showDropdown} onMouseLeave={hideDropdownWithDelay}>
      <button className='flex items-center gap-1'><ChevronDownIcon className='w-4'/>Services</button>
      {isOpen && (
        <ul className='bg-myblue text-black mt-9 p-4 absolute z-10 rounded shadow-lg flex flex-col gap-4'>
          <li>
            <Link to="/MobileDetailing" className="hover:text-blue-400 flex items-center gap-2">
              <hr className='w-3 h-0.5 bg-blue-300 border-0 ' />Mobile Detailing
            </Link>
          </li>
          <li>
            <Link to="/CeramicCoating" className="hover:text-blue-400 flex items-center gap-2">
              <hr className='w-3 h-0.5 bg-blue-300 border-0 ' />Ceramic Coating
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-blue-400 flex items-center gap-2">
              <hr className='w-3 h-0.5 bg-blue-300 border-0 ' />Paint Correction
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
