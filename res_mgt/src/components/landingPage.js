import React from 'react';
import gifImage from '../assets/video.gif'; // Adjust the path as needed
import burgerImage from '../assets/burger.jpg'; // Adjust the path as needed
import exploreImage from "../assets/explore.png";
import PromoBanner from './banner';

const LandingPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="hero-section bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 text-white p-10 text-center">
        <h1 className="text-5xl font-bold">Welcome to <span class="fancy-font">Burger Kween</span> </h1>
        <p className="mt-4 text-xl">Discover our amazing combos.</p>
        <button className="mt-6 px-6 py-3 bg-white text-red-500 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">Order Now</button>
      </div>

      {/* Featured Items */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100">
        <div className="w-full md:w-1/4 p-4">
          <img src={burgerImage} alt="Special Menu Beef Burger" className="w-full h-8/5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">Special Menu Beef Burger</h2>
          <p className="text-gray-600 mt-2">A delicious beef burger with special sauce.</p>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <img src={gifImage} alt="Promotional GIF" className="w-full h-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">Promotional Offer</h2>
          <p className="text-gray-600 mt-2">Get 20% off on your first order!</p>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <img src={exploreImage} alt="Explore the BK Wall" className="w-full h-8/5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">Explore the BK Wall</h2>
          <p className="text-gray-600 mt-2">Discover new and exciting menu items.</p>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="mt-6">
        <PromoBanner />
      </div>

      {/* Categories */}
      <div className="categories-section p-6 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Browse by Categories</h2>
        <div className="flex flex-wrap justify-center mt-4">
          <div className="category-item w-1/2 md:w-1/4 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-gray-800">Burgers</h3>
            </div>
          </div>
          <div className="category-item w-1/2 md:w-1/4 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-gray-800">Pizzas</h3>
            </div>
          </div>
          <div className="category-item w-1/2 md:w-1/4 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-gray-800">Drinks</h3>
            </div>
          </div>
          <div className="category-item w-1/2 md:w-1/4 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-gray-800">Desserts</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-section bg-gray-800 text-white p-6 text-center">
        <p>© 2024 Food Delivery App. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
