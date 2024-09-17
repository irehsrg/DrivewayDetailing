import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaUser, FaQuestionCircle, FaClipboardList, FaHandshake, FaPhoneAlt } from 'react-icons/fa';

const SectionCard = ({ icon, title, children }) => (
  <div style={{
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '2rem',
    marginBottom: '2rem',
    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    transition: 'transform 0.3s ease-in-out',
  }}>
    <h2 style={{ 
      fontSize: '2.2rem', 
      color: '#0094ff', 
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
    }}>
      {icon}
      <span style={{ marginLeft: '1rem' }}>{title}</span>
    </h2>
    {children}
  </div>
);

const About = () => {
  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      backgroundSize: '40px 40px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Navbar />
      <div style={{
        backgroundImage: 'url("/images/detailing-hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        }}>About Driveway Detailing</h1>
      </div>
      <div className="about-container" style={{
        maxWidth: '1000px',
        margin: '0 auto',
        flex: 1,
        color: 'white',
        fontSize: '1.1rem',
        lineHeight: '1.6',
      }}>
        <SectionCard icon={<FaUser size={32} />} title="Meet Alex">
          <div style={{ display: 'flex', alignItems: 'start', gap: '2rem' }}>
            <img src="/images/profile-pic.jpg" alt="Alex Joines" style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              border: '4px solid #0094ff',
            }} />
            <p style={{ fontSize: '1.2rem' }}>Hey there! I'm Alex Joines, the founder and sole operator of Driveway Detailing. As a recent graduate from Tennessee Tech and a full-time software developer, I've turned my long-standing passion for car care into a thriving side hustle. My journey with auto detailing began years ago when I started meticulously cleaning and maintaining my own vehicles, constantly refining my techniques and exploring the best products in the industry.</p>
          </div>
        </SectionCard>
        
        <SectionCard icon={<FaQuestionCircle size={32} />} title="Why Driveway Detailing?">
          <p style={{ fontSize: '1.2rem' }}>Driveway Detailing was born from my desire to share my expertise and passion with fellow car enthusiasts in Cookeville. As a one-man operation, I bring a personal touch to every job, ensuring that each vehicle receives the same level of attention and care that I give to my own cars. My background in software development has instilled in me a keen eye for detail and a problem-solving mindset, which I apply to every detailing project.</p>
        </SectionCard>
        
        <SectionCard icon={<FaClipboardList size={32} />} title="My Approach">
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.2rem' }}>
            {[
              "Personalized service tailored to each vehicle's needs",
              "Use of high-quality, researched products",
              "Continuous learning and improvement of techniques",
              "Flexible scheduling to accommodate your busy life",
              "Transparent communication throughout the process"
            ].map((item, index) => (
              <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#0094ff', marginRight: '1rem', fontSize: '1.5rem' }}>•</span> {item}
              </li>
            ))}
          </ul>
        </SectionCard>
        
        <SectionCard icon={<FaHandshake size={32} />} title="My Commitment">
          <p style={{ fontSize: '1.2rem' }}>As a side hustle, Driveway Detailing isn't just about making extra income—it's about pursuing a passion and delivering exceptional results. I'm committed to providing top-notch detailing services that not only meet but exceed your expectations. Whether you're looking to maintain your daily driver or prep your car for a special event, I'm here to ensure your vehicle looks its absolute best.</p>
        </SectionCard>

        <SectionCard icon={<FaPhoneAlt size={32} />} title="Let's Connect">
          <p style={{ fontSize: '1.2rem' }}>I'm always excited to talk cars and detailing. Whether you have questions about my services, want to book an appointment, or just want to chat about the best ways to keep your vehicle looking pristine, don't hesitate to reach out. Let's work together to make your car the envy of every driveway in Cookeville!</p>
        </SectionCard>
      </div>
      <Footer />
    </div>
  );
};

export default About;