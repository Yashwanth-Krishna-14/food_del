import React from 'react';

const Cart = ({ cart, addToCart, removeFromCart, getSubtotal }) => {
  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.count}</td>
                  <td>
                    <button className="add-button" onClick={() => addToCart(item)}>Add</button>
                    <button className="remove-button" onClick={() => removeFromCart(item)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Subtotal: ${getSubtotal()}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
