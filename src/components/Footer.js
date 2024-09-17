import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      color: 'white',
      padding: '2rem 0',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div className="footer-content" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
      }}>
        <div className="footer-logo-social" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          marginRight: '2rem'
        }}>
          <Link to="/">
            <img src="/images/logo-transparent-png.png" alt="Driveway Detailing Logo" style={{ width: '150px', marginBottom: '1rem' }} />
          </Link>
          <div className="social-icons" style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" aria-label="Facebook"><FaFacebookF color="#4267B2"/></a>
            <a href="https://www.instagram.com/drivewaydetailing.tn/" aria-label="Instagram"><FaInstagram color="#E1306C"/></a>
            <a href="https://x.com/DwDetail" aria-label="Twitter"><FaTwitter color="#1DA1F2"/></a>
          </div>
        </div>
        
        <div className="footer-info" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexGrow: 1,
          gap: '2rem'
        }}>
          <div className="footer-section" style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            flex: 1,
          }}>
            <h3 style={{ marginBottom: '0.5rem', color: 'white' }}>Contact:</h3>
            <p>Call or Text: 931-303-4942</p>
            <p>Email: alex.drivewaydetail@gmail.com</p>
            <p>Cookeville, TN</p>
            <p><a href="https://drive.google.com/file/d/1qHBfHqTnxgUL_jGmtPJUTdBkmK_bmvBZ/view?usp=sharing" style={{ color: '#0094ff' }}>Privacy Policy</a></p>
          </div>
          
          <div className="footer-section" style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            flex: 1,
          }}>
            <h3 style={{ marginBottom: '0.5rem', color: 'white' }}>Business Hours:</h3>
            <p>Monday - Friday: 5:00 PM - 9:00 PM</p>
            <p>Saturday: 8:00 AM - 9:00 PM</p>
            <p>Sunday: 8:00 AM - 5:00 PM</p>
          </div>
          
          <div className="footer-section" style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            flex: 1,
          }}>
            <h3 style={{ marginBottom: '0.5rem', color: 'white' }}>Areas We Cover:</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '0.5rem',
            }}>
              <div>
                <p>Algood</p>
                <p>Baxter</p>
                <p>Cookeville</p>
                <p>Gainesboro</p>
              </div>
              <div>
                <p>Monterey</p>
                <p>Sparta</p>
                <p>Crossville</p>
                <p>Livingston</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom" style={{
        textAlign: 'center',
        marginTop: '2rem',
        paddingTop: '1rem',
        borderTop: '1px solid #333',
      }}>
        <p>© 2024 Driveway Detailing | Top Rated Car Detailer in Your Area</p>
      </div>
    </footer>
  );
};

export default Footer;