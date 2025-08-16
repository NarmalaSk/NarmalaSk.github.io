import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // Assuming you have a CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">CloudKodes</div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <Link to="/portfolio">Portfolio</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 CloudKodes. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
