import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCarSide, FaSprayCan, FaWindowMaximize, FaTachometerAlt, FaCar, FaWind } from 'react-icons/fa';
import { GiVacuumCleaner } from "react-icons/gi";

const ServiceCard = ({ title, description, imageSrc, features }) => (
  <div className="service-card" style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '0 auto 4rem auto',
    maxWidth: '1000px',
    padding: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  }}>
    <div className="service-content" style={{
      flex: '1',
      paddingRight: '2rem'
    }}>
      <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0094ff'}}>{title}</h2>
      <p style={{marginBottom: '1rem', color: '#ffffff', fontSize: '1.2rem'}}>{description}</p>
      <ul style={{listStyleType: 'none', paddingLeft: '0'}}>
        {features.map((feature, index) => (
          <li key={index} style={{marginBottom: '0.75rem', color: '#ffffff', fontSize: '1.4rem'}}>
            <span style={{color: '#0094ff', marginRight: '0.5rem'}}>•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <div className="service-image" style={{flex: '1', textAlign: 'center'}}>
      <img 
        src={imageSrc} 
        alt={title} 
        style={{
          width: '100%',
          maxWidth: '500px',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      />
    </div>
  </div>
);

const getServiceIcon = (service) => {
  switch (service.toLowerCase()) {
    case 'vacuuming': return <GiVacuumCleaner color="#0094ff" />;
    case 'dashboard cleaning': return <FaSprayCan color="#0094ff" />;
    case 'window cleaning': return <FaWindowMaximize color="#0094ff" />;
    case 'exterior wash': return <FaCar color="#0094ff" />;
    case 'tire shine': return <FaTachometerAlt color="#0094ff" />;
    case 'air freshener': return <FaWind color="#0094ff" />;
    default: return <FaCarSide color="#0094ff" />;
  }
};

const ServiceList = ({ services, title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <h5 style={{ color: '#0094ff', marginBottom: '0.5rem', fontSize: '2rem' }}>{title}</h5>
    <ul style={{ listStyleType: 'none', paddingLeft: '0', marginTop: '0.5rem' }}>
      {services.map((service, index) => (
        <li key={index} style={{ marginBottom: '0.5rem', color: '#ffffff', display: 'flex', alignItems: 'center' }}>
          {getServiceIcon(service)}
          <span style={{ marginLeft: '0.5rem', fontSize: '1.1rem' }}>{service}</span>
        </li>
      ))}
    </ul>
  </div>
);

const PricingCard = ({ vehicleSize, prices }) => {
  const insideServices = ['Vacuuming', 'Dashboard Cleaning', 'Window Cleaning', 'Air Freshener'];
  const outsideServices = ['Exterior Wash', 'Tire Shine', 'Sealant Application', 'Clay Bar Treatment', 'Headlight Restoration'];

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
      <h3 style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#0094ff', marginBottom: '1.5rem' }}>{vehicleSize}</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '1.5rem' }}>
        {['inside', 'outside', 'full'].map((type) => (
          <div key={type} style={{ flex: 1, margin: '0 0.5rem' }}>
            <h4 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.6rem', textTransform: 'capitalize' }}>{type} Detail</h4>
            {prices[type] && Object.entries(prices[type]).map(([stage, price]) => (
              <p key={stage} style={{ color: '#ffffff', marginBottom: '0.5rem', fontSize: '1.4rem' }}>
                <span style={{ color: '#0094ff' }}>{stage}:</span> ${price}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <ServiceList services={insideServices} title="Inside Services" />
        <ServiceList services={outsideServices} title="Outside Services" />
      </div>
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
  const [selectedSize, setSelectedSize] = useState('midsize');

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

  const vehicleSizes = [
    { value: 'small', label: 'Small' },
    { value: 'midsize', label: 'Mid-size' },
    { value: 'large', label: 'Large' },
  ];

  const pricingData = {
    small: {
      prices: {
        inside: { Stage1: 50, Stage2: 70, Stage3: 90, Stage4: 110 },
        outside: { Stage1: 60, Stage2: 80, Stage3: 100, Stage4: 120 },
        full: { Stage1: 100, Stage2: 140, Stage3: 180, Stage4: 220 },
      },
      services: ["Vacuuming", "Dashboard Cleaning", "Window Cleaning", "Air Freshener", "Exterior Wash", "Tire Shine"]
    },
    midsize: {
      prices: {
        inside: { Stage1: 65, Stage2: 85, Stage3: 105, Stage4: 125 },
        outside: { Stage1: 75, Stage2: 95, Stage3: 115, Stage4: 135 },
        full: { Stage1: 130, Stage2: 170, Stage3: 210, Stage4: 250 },
      },
      services: ["Vacuuming", "Dashboard Cleaning", "Window Cleaning", "Air Freshener", "Exterior Wash", "Tire Shine"]
    },
    large: {
      prices: {
        inside: { Stage1: 70, Stage2: 90, Stage3: 110, Stage4: 130 },
        outside: { Stage1: 80, Stage2: 100, Stage3: 120, Stage4: 140 },
        full: { Stage1: 140, Stage2: 180, Stage3: 220, Stage4: 260 },
      },
      services: ["Vacuuming", "Dashboard Cleaning", "Window Cleaning", "Air Freshener", "Exterior Wash", "Tire Shine"]
    },
  };

  const addons = [
    { name: "Exterior Plastic Restoration", price: 50, description: "Restore faded plastic trim to like-new condition" },
    { name: "Headlight Restoration", price: 80, description: "Improve visibility and appearance of cloudy headlights" },
    { name: "Engine Bay Cleaning", price: 70, description: "Detailed cleaning of the engine compartment" },
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

          <div className="vehicle-size-selector">
            <select 
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {vehicleSizes.map((size) => (
                <option key={size.value} value={size.value}>{size.label}</option>
              ))}
            </select>
          </div>

          <div className="pricing-container">
            {pricingData[selectedSize] && (
              <PricingCard 
                vehicleSize={vehicleSizes.find(size => size.value === selectedSize).label}
                prices={pricingData[selectedSize].prices}
                services={pricingData[selectedSize].services}
              />
            )}
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