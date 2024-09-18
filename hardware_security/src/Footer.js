import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <h2>Encode-Decode</h2>
          <p>Your one-stop solution for encoding and decoding text with various algorithms.</p>
        </div>
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/FeedbackForm">FeedBack</a></li>
            <li><a href="/terms">Terms and Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section social-section">
          <h3>Follow Us</h3>
          <div className="social-icons-footer">
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-section contact-section">
          <h3>Contact</h3>
          <p>Email: support@encode-decode.com</p>
          <p>Phone: +91-9876543210 </p>
        </div>
        <div className="footer-section contact-section">
          <h3>Major Project</h3>
          <p>Given By CSPDCL</p>
          <p>Made by Pooja Yadav</p>
          <p>M.Sc. IT(4th Semester)</p>
          <p>Pt. Ravishankar Shukla University</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Encode-Decode. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
