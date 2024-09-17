import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 m-5 mt-17">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About BK</h3>
            <ul>
              <li><a href="#" className="hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">BK Info</h3>
            <ul>
              <li><a href="#" className="hover:underline">FAQs & Support</a></li>
              <li><a href="#" className="hover:underline">Nutrition Information</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul>
              <li><a href="#" className="hover:underline">Customer Care</a></li>
              <li><a href="#" className="hover:underline">Supply Chain Queries</a></li>
              <li><a href="#" className="hover:underline">Write to Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>TM & © 2024 BURGER KWEEN CORPORATION. All Rights Reserved.</p>
          <div className="flex justify-center mt-4">
            <a href="#" className="mx-2"><img src="path/to/app-store-icon.png" alt="App Store" className="h-8" /></a>
            <a href="#" className="mx-2"><img src="path/to/google-play-icon.png" alt="Google Play" className="h-8" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
