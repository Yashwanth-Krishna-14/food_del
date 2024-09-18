import React from 'react';

const MenuItem = ({ item, addToCart, removeFromCart, inCart, itemCount }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold">{item.name}</h2>
      <p className="text-gray-700">${item.price}</p>
      <div className="mt-2 flex items-center space-x-2">
        <button
          onClick={() => addToCart(item)}
          className="bg-green-500 text-white px-4 py-2 rounded flex items-center justify-center"
        >
          Add to Cart {itemCount > 0 && <span className="ml-2">({itemCount})</span>}
        </button>
        {itemCount > 0 && (
          <button
            onClick={() => removeFromCart(item)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
