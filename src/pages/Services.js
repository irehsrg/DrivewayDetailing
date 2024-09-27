import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const PricingCard = ({ prices }) => {
  const serviceTypes = ['Exterior + Interior', 'Exterior Only', 'Interior Only'];
  const vehicleSizes = ['Small', 'Mid-sized', 'Large'];

  return (
    <div style={{
      backgroundColor: 'rgba(40, 40, 40, 0.9)',
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
      backdropFilter: 'blur(4px)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ color: '#0094ff', fontSize: '1.8rem', padding: '0.5rem', borderBottom: '1px solid #0094ff' }}></th>
            {vehicleSizes.map((size) => (
              <th key={size} style={{ color: '#0094ff', fontSize: '1.8rem', padding: '0.5rem', borderBottom: '1px solid #0094ff' }}>{size}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {serviceTypes.map((type) => (
            <tr key={type}>
              <td style={{ color: '#ffffff', fontSize: '1.4rem', padding: '0.5rem', textAlign: 'left', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>{type}</td>
              {vehicleSizes.map((size) => (
                <td key={size} style={{ color: '#ffffff', fontSize: '1.4rem', padding: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  ${prices[size.toLowerCase().replace('-', '_')][type.toLowerCase().replace(/ \+ /g, '_').replace(/ /g, '_')]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AddonCard = ({ name, price, description }) => (
  <div style={{
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
    },
  }}>
    <h4 style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#0094ff', marginBottom: '0.75rem' }}>{name}</h4>
    <p style={{ color: '#ffffff', marginBottom: '0.75rem', fontSize: '1.5rem' }}>${price}</p>
    <p style={{ color: '#e0e0e0', fontSize: '1.3rem' }}>{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Exterior Detailing",
      description: "Restore your vehicle's exterior to a showroom shine.",
      imageSrc: "/images/orange-wheel.jpg",
      features: [
        "Hand wash and dry",
        "Clay bar treatment",
        "Wheel and tire detailing",
        "Sealant application"
      ]
    },
    {
      title: "Interior Detailing",
      description: "Revitalize your vehicle's interior for a fresh, like-new feel.",
      imageSrc: "/images/blue-car-door.jpg",
      features: [
        "Wet and dry vacuuming",
        "Leather/upholstery conditioning",
        "Dashboard and trim detailing",
        "Odor elimination"
      ]
    },
    {
      title: "Headlight Restoration",
      description: "Improve visibility and enhance your car's appearance with our headlight restoration service.",
      imageSrc: "/images/headlight.jpg",
      features: [
        "Remove oxidation and yellowing",
        "UV-resistant clear coat application",
        "Improve nighttime visibility",
        "Restore clarity and shine"
      ]
    }
  ];

  const pricingData = {
    small: {
      exterior_interior: 100,
      exterior_only: 60,
      interior_only: 50
    },
    mid_sized: {
      exterior_interior: 130,
      exterior_only: 75,
      interior_only: 65
    },
    large: {
      exterior_interior: 140,
      exterior_only: 80,
      interior_only: 70
    }
  };

  const addons = [
    { name: "Headlight Restoration", price: 60, description: "Improve visibility and appearance of cloudy headlights" }
  ];

  return (
    <>
      <Helmet>
        <title>Car Detailing Services | Driveway Detailing in Cookeville, TN</title>
        <meta name="description" content="Explore our professional car detailing services in Cookeville, TN. From exterior and interior detailing to headlight restoration, I offer customized packages for all vehicle sizes." />
        <meta name="keywords" content="car detailing services, exterior detailing, interior detailing, headlight restoration, Cookeville TN" />
        <link rel="canonical" href="https://dwdetail.com/services" />
        <meta property="og:title" content="Car Detailing Services | Driveway Detailing in Cookeville, TN" />
        <meta property="og:description" content="Explore our professional car detailing services in Cookeville, TN. From exterior and interior detailing to headlight restoration, I offer customized packages for all vehicle sizes." />
        <meta property="og:url" content="https://dwdetail.com/services" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Car Detailing",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Driveway Detailing",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Cookeville",
                  "addressRegion": "TN",
                  "addressCountry": "US"
                }
              },
              "areaServed": {
                "@type": "City",
                "name": "Cookeville"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Car Detailing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Exterior Detailing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Interior Detailing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Headlight Restoration"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>
      <div className="services-page">
        <Navbar />
        <div className="services-container">
          <h1>Our Detailing Services</h1>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}

          <h2>Detailing Packages and Pricing</h2>

          <div className="pricing-container">
            <PricingCard prices={pricingData} />
          </div>

          <h3>Add-on Services</h3>

          <div className="addons-container">
            {addons.map((addon, index) => (
              <AddonCard key={index} {...addon} />
            ))}
          </div>

          <div className="book-now-container">
            <a 
              href="https://squareup.com/appointments/book/o2ujm7vaufvhbc/LJEE0W1TJ1XZY/start" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-tertiary">
              Book Now
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Services;