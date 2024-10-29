import React from 'react';

const Cart = ({ cart, addToCart, removeFromCart, getSubtotal, clearCart }) => {
  return (
    <div className="p-6 bg-gray-120 min-h-screen flex flex-col"> {/* Ensure this matches your menu's background */}
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-700 text-center">Your cart is empty</p>
      ) : (
        <>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
            {cart.map((item) => (
              <div key={item.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col transition-transform transform hover:scale-105">
                <h2 className="font-semibold text-lg text-gray-800">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <p className="mt-2">Quantity: {item.count}</p>
                <div className="mt-auto flex justify-between">
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-600 text-white px-3 py-1 rounded-md flex items-center justify-center text-sm transition duration-300 hover:bg-green-700"
                  >
                    Add
                  </button>
                  {item.count > 0 && (
                    <button
                      onClick={() => removeFromCart(item)}
                      className="bg-red-600 text-white px-3 py-1 rounded-md flex items-center justify-center text-sm transition duration-300 hover:bg-red-700"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Subtotal Section */}
          <div className="mt-auto bg-amber-100  rounded-lg p-4 fixed bottom-0 left-0 right-0 mx-auto max-w-xl z-10">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Subtotal:</h2>
              <span className="text-xl font-bold text-gray-900">${getSubtotal().toFixed(2)}</span>
            </div>
            <button 
              onClick={clearCart} 
              className="mt-4 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 block mx-auto"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;