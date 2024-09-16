import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Our Website</h1>
      <p>Discover our amazing products and services.</p>
      <button onClick={() => window.location.href = '/menu'}>Explore Menu</button>
    </div>
  );
};

export default LandingPage;
