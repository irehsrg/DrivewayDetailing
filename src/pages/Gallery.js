import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Masonry from 'react-masonry-css';
import '../Gallery.css';

const Gallery = () => {
  const galleryItems = [
    { src: "/images/black-van.jpeg", alt: "Exterior detailing result" },
    { src: "/images/black-van2.jpeg", alt: "Interior detailing showcase" },
    { src: "/images/black-van3.jpeg", alt: "Headlight restoration before and after" },
    { src: "/images/black-van4.jpeg", alt: "Paint correction process" },
    { src: "/images/black-van5.jpeg", alt: "Wheel detailing close-up" },
    { src: "/images/black-van6.jpeg", alt: "Full car transformation" },
    { src: "/images/black-van7.jpeg", alt: "Engine bay cleaning" },
    { src: "/images/black-van8.jpeg", alt: "Ceramic coating application" },
    { src: "/images/black-van9.jpeg", alt: "Ceramic coating application" },
    { src: "/images/black-van10.jpeg", alt: "Ceramic coating application" },
    { src: "/images/black-van11.jpeg", alt: "Ceramic coating application" },
    { src: "/images/black-van12.jpeg", alt: "Ceramic coating application" },
    { src: "/images/headlight-before-after.png", alt: "Headlight restoration comparison" },
    { src: "/images/white-mustang.jpg", alt: "White Mustang detailing" },
    { src: "/images/white-mustang2.jpg", alt: "White Mustang detailing" },
    { src: "/images/white-mustang3.jpg", alt: "White Mustang detailing" },
    { src: "/images/white-mustang4.jpg", alt: "White Mustang detailing" },
    { src: "/images/white-mustang5.jpg", alt: "White Mustang detailing" },
    { src: "/images/white-mustang6.jpg", alt: "White Mustang detailing" },
    { src: "/images/white-mustang7.jpg", alt: "White Mustang detailing" },
    { src: "/images/white-mustang8.jpg", alt: "White Mustang detailing" },
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Navbar />
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '10rem 2rem 2rem 2rem',
        flex: 1,
      }}>
        <h1 style={{
          fontSize: '2.6rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#0094ff',
        }}>Our Work</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
            </div>
          ))}
        </Masonry>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;