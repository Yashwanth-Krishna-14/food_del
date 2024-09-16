import React, { useState } from 'react';
import MenuItem from './menuItems';

const Menu = ({ addToCart, removeFromCart, cart, getItemCount }) => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('name');

  const menuItems = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 8 },
    { id: 3, name: 'Pasta', price: 12 },
    // Add more items as needed
  ];

  const filteredItems = menuItems
    .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => (sort === 'name' ? a.name.localeCompare(b.name) : a.price - b.price));

  return (
    <div>
      <h1>Menu</h1>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>
      <div className="menu">
        {filteredItems.map(item => (
          <MenuItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            inCart={cart.some(cartItem => cartItem.id === item.id)}
            itemCount={getItemCount(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
