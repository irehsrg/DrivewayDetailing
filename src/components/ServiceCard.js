import React, { useState, useEffect } from 'react';

const ServiceCard = ({ title, description, imageSrc, features }) => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowImage(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="service-card" style={{
      display: 'flex',
      flexDirection: showImage ? 'row' : 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0 auto 4rem auto',
      maxWidth: '1000px',
      padding: '2rem',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    }}>
      {showImage && (
        <div className="service-image" style={{
          flex: 1,
          textAlign: 'center',
          order: showImage ? 2 : 1,
          marginBottom: showImage ? 0 : '1.5rem',
        }}>
          <img 
            src={imageSrc} 
            alt={title} 
            style={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
      )}
      <div className="service-content" style={{
        flex: 1,
        paddingRight: showImage ? '2rem' : 0,
        order: showImage ? 1 : 2,
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#0094ff',
        }}>{title}</h2>
        <p style={{
          marginBottom: '1rem',
          color: '#ffffff',
          fontSize: '1.2rem',
        }}>{description}</p>
        <ul style={{
          listStyleType: 'none',
          paddingLeft: 0,
        }}>
          {features.map((feature, index) => (
            <li key={index} style={{
              marginBottom: '0.75rem',
              color: '#ffffff',
              fontSize: '1.4rem',
            }}>
              <span style={{ color: '#0094ff', marginRight: '0.5rem' }}>•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;