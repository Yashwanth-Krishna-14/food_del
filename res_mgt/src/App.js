import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import Cart from './components/cart';
import Navbar from './components/navbar';
import LandingPage from './components/landingPage';
import AuthPage from './components/authPage';
import Footer from './components/footer';
import Modal from './components/modal';
import LocationComponent from './components/location';

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, count: 1 }];
      }
    });
  };

  const removeFromCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem.count === 1) {
        return prevCart.filter(cartItem => cartItem.id !== item.id);
      } else {
        return prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, count: cartItem.count - 1 } : cartItem
        );
      }
    });
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  const getItemCount = (item) => {
    const cartItem = cart.find(cartItem => cartItem.id === item.id);
    return cartItem ? cartItem.count : 0;
  };

  const openModal = (login) => {
    setIsLogin(login);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
   
      <div className="app">
        <Navbar cartCount={cart.reduce((total, item) => total + item.count, 0)} openModal={openModal} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} getItemCount={getItemCount} />} />
          <Route path="/cart" element={<Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} getSubtotal={getSubtotal} />} />
        </Routes>
        <LocationComponent />
        <Footer />
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <AuthPage isLogin={isLogin} onClose={closeModal} />
        </Modal>
      </div>
   
  );
};

export default App;
