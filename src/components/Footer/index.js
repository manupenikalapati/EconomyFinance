// Footer.jsx

import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h4>About Us</h4>
          <p>Welcome to Enomy Finance, your ultimate financial companion. We understand the importance of managing your money effectively, which is why we've created a suite of tools to simplify your financial life.</p>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Investment Planning</li>
            <li>Financial Advisory</li>
            <li>Retirement Planning</li>
            <li>Wealth Management</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: economifinance@gmail.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Financial Street, Chennai, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Financial Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
