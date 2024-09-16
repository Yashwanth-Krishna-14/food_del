import React from 'react';
import sampleVideo from '../assets/video.mp4'; // Adjust the path as needed

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Our Website</h1>
      <p>Discover our amazing products and services.</p>
      <div className="video-container">
        <video width="560" height="315" controls loop>
          <source src={sampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button>Learn More</button>
    </div>
  );
};

export default LandingPage;
