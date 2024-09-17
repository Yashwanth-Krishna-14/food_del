import React from 'react';


const PromoBanner = () => {
  return (
    <div className="bg-yellow-100 p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">DEALS OF THE DAY</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Chocolate Thick Shake</h3>
          <p className="text-green-500 font-bold">FREE</p>
          <p className="text-sm text-gray-600">*Minimum order value ₹399. T&C Apply</p>
          <button className="mt-2 bg-orange-500 text-white py-2 px-4 rounded-lg">ORDER NOW</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Peri Peri Fries</h3>
          <p className="text-green-500 font-bold">FREE</p>
          <p className="text-sm text-gray-600">*Minimum order value ₹329. T&C Apply</p>
          <button className="mt-2 bg-orange-500 text-white py-2 px-4 rounded-lg">ORDER NOW</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="../assets/ck burger.webp"></img>
          <h3 className="text-xl font-semibold">BK Veg Whopper</h3>
          <p className="text-green-500 font-bold">FREE</p>
          <p className="text-sm text-gray-600">*Minimum order value ₹299. T&C Apply</p>
          <button className="mt-2 bg-orange-500 text-white py-2 px-4 rounded-lg">ORDER NOW</button>
        </div>
      </div>
      <button className="mt-6 bg-orange-500 text-white py-2 px-6 rounded-lg">EXPLORE FULL MENU</button>
    </div>
  );
};

export default PromoBanner;
