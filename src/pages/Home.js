import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Driveway Detailing | Premium Mobile Car Detailing in Cookeville, TN</title>
        <meta name="description" content="Driveway Detailing offers top-quality mobile car detailing services in Cookeville, TN. We drive for perfection in exterior and interior detailing, headlight restoration, and more." />
        <meta name="keywords" content="car detailing, mobile detailing, Cookeville, TN, exterior detailing, interior detailing, headlight restoration" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Driveway Detailing",
              "description": "Premium mobile car detailing services in Cookeville, TN",
              "url": "https://dwdetail.com",
              "telephone": "931-303-4942",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cookeville",
                "addressRegion": "TN",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": YOUR_LATITUDE,
                "longitude": YOUR_LONGITUDE
              },
              "sameAs": [
                "https://x.com/DwDetail",
                "https://www.instagram.com/drivewaydetailing.tn/",
                "YOUR_TWITTER_URL",
              ]
            }
          `}
        </script>
      </Helmet>
      <div className="home-page">
        <video autoPlay loop muted className="video-background">
          <source src="/images/Car Edit.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <Navbar/>
        <div className="social-media-sidebar">
          <a href="https://www.instagram.com/drivewaydetailing.tn/" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://x.com/DwDetail" aria-label="Twitter"><FaTwitter /></a>
        </div>
        <div className="home-content">
          <h1>We drive for perfection</h1>
          <p>Cookeville's local detailing professional</p>
          <div className="button-group">
          <Link to="/services" className="btn btn-primary">OUR SERVICES</Link>
          <a href="https://squareup.com/appointments/book/o2ujm7vaufvhbc/LJEE0W1TJ1XZY/start" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">MAKE A BOOKING</a>
        </div>
        </div>
        <section className="about-section">
          <h2>Why Choose Driveway Detailing?</h2>
          <p>At Driveway Detailing, we bring the car wash to you. Our mobile detailing services offer convenience without compromising on quality. With years of experience and a passion for perfection, we ensure your vehicle receives the highest standard of care.</p>
          <ul>
            <li>Professional-grade products and equipment</li>
            <li>Experienced and detail-oriented staff</li>
            <li>Customized detailing packages to suit your needs</li>
            <li>Environmentally friendly practices</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;