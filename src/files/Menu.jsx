import React, { useState } from 'react';
import './Menu.css'; // Assuming styles are in a separate CSS file

const menuItems = [
  {
    id: 1,
    category: 'starters',
    name: 'Tomato Soup',
    description: 'A warm and hearty soup made with fresh tomatoes.',
    price: '$5.99',
    image: 'res.png', // Replace with actual image
  },
  {
    id: 2,
    category: 'main-course',
    name: 'Grilled Salmon',
    description: 'Freshly grilled salmon served with lemon butter sauce.',
    price: '$15.99',
    image: 'main-course.jpg', // Replace with actual image
  },
  {
    id: 3,
    category: 'desserts',
    name: 'Chocolate Cake',
    description: 'Rich and moist chocolate cake with layers of cream.',
    price: '$6.99',
    image: 'dessert.jpg', // Replace with actual image
  },
  {
    id: 4,
    category: 'beverages',
    name: 'Mango Smoothie',
    description: 'A refreshing smoothie made with ripe mangoes.',
    price: '$4.99',
    image: 'beverage.jpg', // Replace with actual image
  },
];

const categories = ['all', 'starters', 'main-course', 'desserts', 'beverages'];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="menu-container">
      {/* Menu Heading */}
      <div className="menu-heading">
        Our Menu
      </div>

      {/* Menu Categories */}
      <div className="menu-categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="menu-items">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-img" />
            <div className="menu-item-info">
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
              <p className="menu-item-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
