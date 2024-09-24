import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="main-nav flex justify-between items-center px-6 py-4 bg-black bg-opacity-70">
        <Link to="/" className="logo-link">
          <img src="/images/logo-transparent-png.png" alt="Driveway Detailing Logo" className="logo w-16 h-16" />
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>SERVICES</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>ABOUT</Link></li>
          <li><Link to="/gallery" onClick={toggleMenu}>GALLERY</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;