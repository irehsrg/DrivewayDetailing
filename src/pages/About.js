import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaUser, FaQuestionCircle, FaClipboardList, FaHandshake, FaPhoneAlt } from 'react-icons/fa';

const SectionCard = ({ icon, title, children }) => (
  <div className="section-card">
    <h2>
      {icon}
      <span>{title}</span>
    </h2>
    {children}
  </div>
);

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Driveway Detailing | Professional Car Detailing in Cookeville, TN</title>
        <meta name="description" content="Learn about Driveway Detailing, Cookeville's premier mobile car detailing service. Discover our passion for perfection and commitment to quality." />
        <meta name="keywords" content="about driveway detailing, car detailing Cookeville, professional detailing, mobile car wash" />
        <link rel="canonical" href="https://dwdetail.com/about" />
        <meta property="og:title" content="About Driveway Detailing | Professional Car Detailing in Cookeville, TN" />
        <meta property="og:description" content="Learn about Driveway Detailing, Cookeville's premier mobile car detailing service. Discover our passion for perfection and commitment to quality." />
        <meta property="og:url" content="https://dwdetail.com/about" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://dwdetail.com/about"
              },
              "name": "About Driveway Detailing",
              "description": "Learn about Driveway Detailing, Cookeville's premier mobile car detailing service. Discover our passion for perfection and commitment to quality.",
              "publisher": {
                "@type": "Organization",
                "name": "Driveway Detailing",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://dwdetail.com/images/logo-transparent-png.png"
                }
              }
            }
          `}
        </script>
      </Helmet>
      <div className="about-page">
        <Navbar />
        <div className="about-hero">
          <h1>About Driveway Detailing</h1>
        </div>
        <div className="about-container">
          <SectionCard icon={<FaUser size={32} />} title="Meet Alex">
            <div className="profile-section">
              <img src="/images/profile-pic.jpg" alt="Alex Joines" className="profile-pic" />
              <p>Hey there! I'm Alex Joines, the founder and sole operator of Driveway Detailing. As a recent graduate from Tennessee Tech and a full-time software developer, I've turned my long-standing passion for car care into a thriving side hustle. My journey with auto detailing began years ago when I started meticulously cleaning and maintaining my own vehicles, constantly refining my techniques and exploring the best products in the industry.</p>
            </div>
          </SectionCard>
          
          <SectionCard icon={<FaQuestionCircle size={32} />} title="Why Driveway Detailing?">
            <p>Driveway Detailing was born from my desire to share my expertise and passion with fellow car enthusiasts in Cookeville. As a one-man operation, I bring a personal touch to every job, ensuring that each vehicle receives the same level of attention and care that I give to my own cars. My background in software development has instilled in me a keen eye for detail and a problem-solving mindset, which I apply to every detailing project.</p>
          </SectionCard>
          
          <SectionCard icon={<FaClipboardList size={32} />} title="My Approach">
            <ul>
              {[
                "Personalized service tailored to each vehicle's needs",
                "Use of high-quality, researched products",
                "Continuous learning and improvement of techniques",
                "Flexible scheduling to accommodate your busy life",
                "Transparent communication throughout the process"
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </SectionCard>
          
          <SectionCard icon={<FaHandshake size={32} />} title="My Commitment">
            <p>As a side hustle, Driveway Detailing isn't just about making extra income—it's about pursuing a passion and delivering exceptional results. I'm committed to providing top-notch detailing services that not only meet but exceed your expectations. Whether you're looking to maintain your daily driver or prep your car for a special event, I'm here to ensure your vehicle looks its absolute best.</p>
          </SectionCard>

          <SectionCard icon={<FaPhoneAlt size={32} />} title="Let's Connect">
            <p>I'm always excited to talk cars and detailing. Whether you have questions about my services, want to book an appointment, or just want to chat about the best ways to keep your vehicle looking pristine, don't hesitate to reach out. Let's work together to make your car the envy of every driveway in Cookeville!</p>
          </SectionCard>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;