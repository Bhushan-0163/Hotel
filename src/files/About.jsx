import React from 'react';
import './About.css';  // Assuming you keep the CSS in a separate file.
import { useNavigate } from 'react-router-dom';
const AboutUs = () => {
  const navigate = useNavigate();
  const HandleAbout = () =>{
    navigate('/MoreAbout')
  }
  return (
    <div className="about-container">
      {/* About Us Heading */}
      <div className="about-heading">
        About Us
      </div>

      {/* About Section */}
      <div className="about-section">
        {/* Image Section */}
        <div className="about-image">
          <img src="/restaurant.jpg" alt="Restaurant" />
        </div>

        {/* Content Section */}
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Welcome to Hotel Samruddhi, where passion meets flavor. We started our journey
            with a vision to create a space where guests could savor the finest dishes crafted
            from the freshest ingredients. Every plate served reflects our commitment to quality
            and innovation, ensuring you enjoy an unforgettable dining experience.
          </p>
          <p>
            At Hotel Samruddhi, we blend traditional recipes with modern techniques to create
            a culinary adventure like no other. Whether you're here for a quick bite or a full-course
            meal, our team is dedicated to delivering perfection in every bite.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="about-mission">
        <h3>Our Mission</h3>
        <p>
          To offer an exceptional dining experience that nourishes the soul. We strive to serve
          our community with love and dedication, ensuring every visit to Hotel Samruddhi is memorable.
        </p>
      </div>
      <div className="about-heading" id="a1">
        More About Us
      </div>
      <div id="s1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTva8uF7U_rP3rpzFtBgHNlQYNWcLxzmValg&snpm startdata:image/png;base64,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" alt='hotel' onClick={HandleAbout}></img>
      </div>
    </div>
  );
}

export default AboutUs;
