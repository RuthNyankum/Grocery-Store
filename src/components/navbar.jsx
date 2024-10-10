import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BiCart, BiMenu } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';
import K from '../constant';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile hamburger menu
  const dropdownRef = useRef(null);

  // "Products dropdown"
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle mobile menu visibility
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-primary p-4">
      <div className="flex justify-between items-center md:justify-around">
        {/* Brand Logo */}
        <Link to="/" className="font-courgette text-2xl">
          R&A Grocery
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <BiMenu className="text-3xl" onClick={handleMenu} />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex font-nunito text-xl gap-x-10">
          {K.NAVLINKS.map((item, index) => (
            <div
              key={index}
              className="relative"
              ref={item.name === 'Products' ? dropdownRef : null}
            >
              {item.dropdown ? (
                <div
                  className="flex items-center cursor-pointer"
                  onClick={handleDropdown}
                >
                  <p>{item.name}</p>
                  <IoMdArrowDropdown className="ml-1" /> {/* Dropdown arrow */}
                </div>
              ) : (
                <Link to={item.path}>{item.name}</Link>
              )}

              {/* Dropdown */}
              {item.dropdown && isDropdownOpen && (
                <div className="absolute bg-white border mt-2 p-2 shadow-lg">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cart Icon  */}
        <div className="hidden md:flex font-nunito text-xl gap-x-2">
          <Link to="/cart" className="flex items-center">
            <BiCart className="size-8" />
            <p>Cart</p>
          </Link>
        </div>
      </div>

      {/* Mobile Links - Hamburger Menu */}
      {isMenuOpen && (
        <div className="flex flex-col mt-4 md:hidden">
          {K.NAVLINKS.map((item, index) => (
            <div
              key={index}
              className="relative mb-2"
              ref={item.name === 'Products' ? dropdownRef : null}
            >
              {item.dropdown ? (
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={handleDropdown}
                >
                  <p>{item.name}</p>
                  <IoMdArrowDropdown className="ml-1" /> {/* Dropdown arrow */}
                </div>
              ) : (
                <Link to={item.path} className="block py-2">
                  {item.name}
                </Link>
              )}

              {/* Mobile Dropdown */}
              {item.dropdown && isDropdownOpen && (
                <div className="bg-white border mt-2 p-2 shadow-lg">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Cart for Mobile  */}
          <Link to="/cart" className="flex items-center gap-x-2 py-2">
            <BiCart className="size-8" />
            <p>Cart</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
