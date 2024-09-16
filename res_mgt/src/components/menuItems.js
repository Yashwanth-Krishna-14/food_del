import React from 'react';

const MenuItem = ({ item, addToCart, removeFromCart, inCart, itemCount }) => {
  return (
    <div className="menu-item">
      <h2>{item.name}</h2>
      <p>Price: ${item.price}</p>
      <button onClick={() => addToCart(item)}>
        Add to Cart {itemCount > 0 && `(${itemCount})`}
      </button>
      {inCart && <button onClick={() => removeFromCart(item)}>Remove from Cart</button>}
    </div>
  );
};

export default MenuItem;
