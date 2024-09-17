import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUtensils, FaSignInAlt, FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartCount, openModal }) => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="/path/to/logo.png" alt="Brand Logo" className="h-8" />
        <Link
          to="/"
          className={`text-white flex items-center space-x-2 ${location.pathname === '/' ? 'font-bold' : ''}`}
          aria-label="Home"
        >
          <FaHome />
          <span>Home</span>
        </Link>
        <Link
          to="/menu"
          className={`text-white flex items-center space-x-2 ${location.pathname === '/menu' ? 'font-bold' : ''}`}
          aria-label="Menu"
        >
          <FaUtensils />
          <span>Menu</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => openModal(true)}
          className="text-white flex items-center space-x-2"
          aria-label="Login"
        >
          <FaSignInAlt />
          <span>Login</span>
        </button>
        
        <Link
          to="/cart"
          className={`text-white flex items-center space-x-2 ${location.pathname === '/cart' ? 'font-bold' : ''}`}
          aria-label="Cart"
        >
          <FaShoppingCart />
          <span>Cart ({cartCount})</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
