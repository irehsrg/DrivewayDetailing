import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="main-nav flex justify-between items-center px-6 py-4 bg-black bg-opacity-70">
        <Link to="/" className="logo-link">
          <img src="/images/logo-transparent-png.png" alt="Driveway Detailing Logo" className="logo w-16 h-16" />
        </Link>
        <ul className="nav-links flex space-x-6 text-white">
          <li><Link to="/" className="hover:text-blue-400 transition-colors">HOME</Link></li>
          {/* Commenting out dropdown functionality
            <li className="dropdown">
              <Link to="/services">SERVICES ▼</Link>
              <div className="dropdown-content">
                <Link to="/services/exterior-detailing">Exterior Detailing</Link>
                <Link to="/services/interior-detailing">Interior Detailing</Link>
                <Link to="/services/headlight-restoration">Headlight Restoration</Link>
                <Link to="/services/ceramic-coating">Ceramic Coating</Link>
              </div>
            </li>
            */}
          <li><Link to="/services" className="hover:text-blue-400 transition-colors">SERVICES</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 transition-colors">ABOUT</Link></li>
          <li><Link to="/gallery" className="hover:text-blue-400 transition-colors">GALLERY</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400 transition-colors">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;