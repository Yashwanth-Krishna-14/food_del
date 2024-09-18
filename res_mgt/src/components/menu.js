import React, { useState } from 'react';
import MenuItem from './menuItems';
import usePagination from './pagination';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Menu = ({ addToCart, removeFromCart, cart, getItemCount }) => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('name');

  const menuItems = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 8 },
    { id: 3, name: 'Pasta', price: 12 },
    // Add more items as needed
    { id: 4, name: 'Salad', price: 7 },
    { id: 5, name: 'Sushi', price: 15 },
    { id: 6, name: 'Steak', price: 20 },
    { id: 7, name: 'Tacos', price: 9 },
    { id: 8, name: 'Sandwich', price: 6 },
    { id: 9, name: 'Soup', price: 5 },
    { id: 10, name: 'Fries', price: 4 },
    { id: 11, name: 'Ice Cream', price: 3 },
    { id: 12, name: 'Cake', price: 6 },
    { id: 13, name: 'Coffee', price: 2 },
    { id: 14, name: 'Tea', price: 2 },
    { id: 15, name: 'Juice', price: 3 },
    { id: 16, name: 'Smoothie', price: 5 },
    { id: 17, name: 'Pancakes', price: 7 },
    { id: 18, name: 'Waffles', price: 7 },
    { id: 19, name: 'Omelette', price: 6 },
    { id: 20, name: 'Bacon', price: 4 },
    { id: 21, name: 'Sausage', price: 4 },
    { id: 22, name: 'Chicken Wings', price: 10 },
    { id: 23, name: 'Nachos', price: 8 },
    { id: 24, name: 'Quesadilla', price: 9 },
    { id: 25, name: 'Burrito', price: 10 },
    { id: 26, name: 'Hot Dog', price: 5 },
    { id: 27, name: 'Fish and Chips', price: 12 },
    { id: 28, name: 'Lasagna', price: 14 },
    { id: 29, name: 'Ramen', price: 11 },
    { id: 30, name: 'Dumplings', price: 8 },
    { id: 31, name: 'Spring Rolls', price: 6 },
    { id: 32, name: 'Fried Rice', price: 7 },
    { id: 33, name: 'Curry', price: 13 },
    { id: 34, name: 'BBQ Ribs', price: 18 },
    { id: 35, name: 'Grilled Cheese', price: 5 },
    { id: 36, name: 'Mac and Cheese', price: 8 },
    { id: 37, name: 'Falafel', price: 7 },
    { id: 38, name: 'Gyro', price: 9 },
    { id: 39, name: 'Shawarma', price: 10 },
    { id: 40, name: 'Pita Bread', price: 3 },
    { id: 41, name: 'Hummus', price: 4 },
    { id: 42, name: 'Bruschetta', price: 6 },
    { id: 43, name: 'Caprese Salad', price: 8 },
    { id: 44, name: 'Gnocchi', price: 12 },
    { id: 45, name: 'Risotto', price: 14 },
    { id: 46, name: 'Clam Chowder', price: 10 },
    { id: 47, name: 'Lobster Bisque', price: 15 },
    { id: 48, name: 'Crab Cakes', price: 12 },
    { id: 49, name: 'Shrimp Cocktail', price: 14 },
    { id: 50, name: 'Oysters', price: 18 },
    { id: 51, name: 'Mussels', price: 16 },
    { id: 52, name: 'Calamari', price: 10 },
    { id: 53, name: 'Stuffed Peppers', price: 9 },
    { id: 54, name: 'Eggplant Parmesan', price: 11 },
    { id: 55, name: 'Chicken Parmesan', price: 13 },
    { id: 56, name: 'Beef Stroganoff', price: 14 },
    { id: 57, name: 'Shepherd’s Pie', price: 12 },
    { id: 58, name: 'Pot Roast', price: 15 },
    { id: 59, name: 'Meatloaf', price: 10 },
    { id: 60, name: 'Fried Chicken', price: 12 },
  ];

  const filteredItems = menuItems
    .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => (sort === 'name' ? a.name.localeCompare(b.name) : a.price - b.price));

  const { currentData, currentPage, totalPages, setCurrentPage } = usePagination(filteredItems, 12);

  return (
    
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Menu</h1>
        <input
          type="text"
          placeholder="Filter by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentData.map(item => (
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
        <div className="mt-4 flex justify-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <Link
              key={index}
              to={`#`}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 mx-1 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
            >
              {index + 1}
            </Link>
          ))}
        </div>
      </div>
    
  );
};

export default Menu;
