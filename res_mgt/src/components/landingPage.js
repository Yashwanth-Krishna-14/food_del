import React from 'react';
import gifImage from '../assets/video.gif'; // Adjust the path as needed
import burgerImage from '../assets/burger.jpg'; // Adjust the path as needed
import exploreImage from "../assets/explore.png"
import PromoBanner from './banner';
const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100">
      <div className="w-full md:w-1/4"> {/* Reduced width */}
        <img src={burgerImage} alt="Special Menu Beef Burger" className="w-full h-4/5rounded-lg shadow-lg" />
      </div>
      <div className="w-full md:w-2/3 mt-5 md:mt-0 md:ml-5"> {/* Adjusted width */}
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Website</h1>
        <p className="mt-4 text-gray-600">Discover our amazing products and services.</p>
        <div className="gif-container mt-4">
          <img src={gifImage} alt="Promotional GIF" className="rounded-lg shadow-lg size-72 w-auto" />
        </div>
        <button className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600">Learn More</button>
       
      
        
      </div>
      
      
    </div>
    <div className="w-10/12 md:w-10/12 mt-6 ml-20 mr-20 justify-center items-center"> {/* Added new image */}
    <img src={exploreImage} alt="Explore the BK Wall" className="w-full h-30px rounded-lg shadow-lg " />
  </div>
    <div className="landing-page">
      <PromoBanner />
      {/* Other components and content */}
    </div>
    
    </div>
    
  );
};

export default LandingPage;
