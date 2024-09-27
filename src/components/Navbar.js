import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="main-nav">
        <Link to="/" className="logo-link">
          <img src="/images/logo-transparent-png.png" alt="Driveway Detailing Logo" className="logo" />
        </Link>
        {isMobile && (
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes color="#0094ff" size={24} /> : <FaBars color="#0094ff" size={24} />}
          </div>
        )}
        <ul className={`nav-links ${isMobile ? (isOpen ? 'show' : 'hide') : ''}`}>
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