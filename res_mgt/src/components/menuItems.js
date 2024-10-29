import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import icons for add/remove actions

const MenuItem = ({ item, addToCart, removeFromCart, inCart, itemCount }) => {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-xl transition-shadow bg-white">
      <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
      <p className="text-md text-gray-600">${item.price.toFixed(2)}</p>
      <div className="mt-3 flex items-center space-x-2">
        <button
          onClick={() => addToCart(item)}
          className="bg-green-500 text-white px-2 py-2 rounded-md flex items-center justify-center text-sm transition duration-300 hover:bg-green-600"
        >
          <FaPlus className="mr-1" /> {/* Add icon */}
          Add {itemCount > 0 && <span className="ml-1">({itemCount})</span>}
        </button>
        {itemCount > 0 && (
          <button
            onClick={() => removeFromCart(item)}
            className="bg-red-500 text-white px-2 py-2 rounded-md flex items-center justify-center text-sm transition duration-300 hover:bg-red-600"
          >
            <FaMinus className="mr-1" /> {/* Remove icon */}
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuItem;