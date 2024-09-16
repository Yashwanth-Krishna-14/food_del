import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/cart">Cart ({cartCount})</Link>
      <Link to="/auth">Login/Signup</Link>
    </nav>
  );
};

export default Navbar;
