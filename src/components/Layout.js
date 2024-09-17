import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="navbar">
      <Link to="/" className="logo-link">
          <img src="/images/logo-transparent-png.png" alt="Driveway Detailing Logo" className="logo" />
      </Link>
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li className="dropdown">
            <Link to="/services">SERVICES ▼</Link>
            <div className="dropdown-content">
              <Link to="/services/auto-detailing">Exterior Detailing</Link>
              <Link to="/services/paint-protection">Interior Detailing</Link>
            </div>
          </li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/blog">GALLERY</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/images/logo-transparent-png.png" alt="Driveway Detailing Logo" />
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/drivewaydetailing.tn/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://x.com/DwDetail" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Contact Us:</h3>
            <p><i className="fas fa-phone"></i> Call or Text us: 931-303-4942</p>
            <p><i className="fas fa-envelope"></i> Email us: alex@dwdetail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Cookeville, TN</p>
            <p><a href="https://drive.google.com/file/d/1qHBfHqTnxgUL_jGmtPJUTdBkmK_bmvBZ/view?usp=sharing" rel="noopener noreferrer" target="_blank">Privacy Policy</a></p>
          </div>
          <div className="footer-services">
            <h3>Our Services:</h3>
            <ul>
              <li>Exterior Detailing</li>
              <li>Interior Detailing</li>
              <li>Headlight Restoration</li>
              <li>Ceramic Coating</li>
              <li>Other Services</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Driveway Detailing | Top Rated Car Detailer in Your Area</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;