import React from 'react';
import './Contact.css';  // CSS file to style the component

const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Contact Us Heading */}
      <div className="contact-heading">
        Contact Us
      </div>

      {/* Contact Form and Info Section */}
      <div className="contact-section">
        {/* Form Section */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="contact-info">
          <h2>Our Location</h2>
          <p>Hotel Samruddhi<br></br>
          Gunjalwadi Rd, near Unicorn Nest Building, Sangamner College, Sharda Bekri, Sangamner, Ghulewadi, Maharashtra 422605</p>
          <p><b>Phone:</b></p>
          <a href="tel:+917972190163" className="phone-link">
            +91 7972190163
          </a>
          <p><b>Email:</b> samruddhi@restaurant.com</p>
          
          {/* Embedded Google Maps */}
          <div className="map">
          <iframe title="Hotel Samruddhi" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.8114151837094!2d74.18357047895233!3d19.59257843459082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd0116dcad973d%3A0xece82c5036b0fb24!2sHotel%20Samruddhi!5e0!3m2!1sen!2sin!4v1727687691381!5m2!1sen!2sin" width="100%" height="300" style={{ border: "0" }}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
