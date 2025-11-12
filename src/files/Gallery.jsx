
import React, { useState } from 'react';
import './Gallery.css'; // Import the CSS file

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Sample gallery items
    const galleryItems = [
        { id: 1, image: 'Interior.jpg', alt: 'Ambience 1',category: 'Ambience' },
        { id: 2, src: 'Ambience2.jpg', alt: 'Ambience 2', category: 'Ambience' },
        { id: 3, src: 'food1.jpg', alt: 'Food 1', category: 'Food' },
        { id: 4, src: 'food2.jpg', alt: 'Food 2', category: 'Food' },
        { id: 5, src: 'architecture1.jpg', alt: 'Architecture 1', category: 'Architecture' },
        { id: 6, src: 'architecture2.jpg', alt: 'Architecture 2', category: 'Architecture' },
    ];

    // Category buttons'
    const categories = ['All', 'Ambience', 'Food', 'Architecture'];

    return (
        <div className="gallery-container">
            <h1 className="gallery-title">Our Gallery</h1>
            
            {/* Category Buttons */}
            <div className="gallery-categories">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid">
                {galleryItems
                    .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
                    .map(item => (
                        <div key={item.id} className="gallery-item">
                            <img src={item.src} alt={item.alt} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Gallery;

