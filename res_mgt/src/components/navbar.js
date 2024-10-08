import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUtensils, FaSignInAlt, FaShoppingCart, FaUser } from 'react-icons/fa';
import AddressModal from './addressModal'; // Import the AddressModal component

const Navbar = ({ cartCount, openModal }) => {
  const location = useLocation();
  const [option, setOption] = useState('dine-in');
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [address, setAddress] = useState('Enter your address');

  const toggleOption = () => {
    setOption(prevOption => (prevOption === 'dine-in' ? 'takeaway' : 'dine-in'));
  };

  const openAddressModal = () => {
    setIsAddressModalOpen(true);
  };

  const closeAddressModal = () => {
    setIsAddressModalOpen(false);
  };

  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
    closeAddressModal();
  };

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
        <div className="flex items-center space-x-2">
          <span className="text-white">{option === 'dine-in' ? 'Dine-In' : 'Takeaway'}</span>
          <label className="switch">
            <input type="checkbox" checked={option === 'takeaway'} onChange={toggleOption} />
            <span className="slider round"></span>
          </label>
        </div>
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
        <Link
          to="/profile"
          className={`text-white flex items-center space-x-2 ${location.pathname === '/profile' ? 'font-bold' : ''}`}
          aria-label="Profile"
        >
          <FaUser />
          <span>Profile</span>
        </Link>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={address}
            readOnly
            className="bg-gray-700 text-white px-2 py-1 rounded"
            onClick={openAddressModal}
          />
          <button
            onClick={openAddressModal}
            className="text-white flex items-center space-x-2"
            aria-label="Add Address"
          >
            <span>Edit</span>
          </button>
        </div>
      </div>
      <AddressModal isOpen={isAddressModalOpen} onClose={closeAddressModal} onSave={handleAddressChange} />
    </nav>
  );
};

export default Navbar;
