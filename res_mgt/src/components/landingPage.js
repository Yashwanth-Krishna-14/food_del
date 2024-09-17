import React from 'react';
import sampleVideo from '../assets/video.mp4'; // Adjust the path as needed
import burgerImage from '../assets/burger.jpg'; // Adjust the path as needed

const LandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100">
      <div className="w-full md:w-1/4"> {/* Reduced width */}
        <img src={burgerImage} alt="Special Menu Beef Burger" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div className="w-full md:w-2/3 mt-5 md:mt-0 md:ml-5"> {/* Adjusted width */}
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Website</h1>
        <p className="mt-4 text-gray-600">Discover our amazing products and services.</p>
        <div className="video-container mt-4">
          <video width="560" height="315" controls loop className="rounded-video">
            <source src={sampleVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <button className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600">Learn More</button>
      </div>
    </div>
  );
};

export default LandingPage;
