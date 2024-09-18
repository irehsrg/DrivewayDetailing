import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaUser, FaEnvelope, FaComment, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    emailjs.send('service_s9f2xo6', 'template_pdvf3nr', formData, 'I2YKtXsJPsgVC6LL-')
    .then((response) => {
      console.log('Notification email sent successfully:', response);
      // Send auto-reply email
      return emailjs.send('service_s9f2xo6', 'template_j51j3uo', formData, 'I2YKtXsJPsgVC6LL-');
    })
    .then((response) => {
      console.log('Auto-reply email sent successfully:', response);
      setSubmitMessage('Thank you for your message. We\'ll get back to you soon!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setSubmitMessage('Oops! Something went wrong. Please try again later.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
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
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem 2rem',
      }}>
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          marginTop: '10rem',
          display: 'flex',
          flexDirection: 'row',
          gap: '4rem',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '3rem',
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        }}>
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontSize: '3rem',
              color: '#0094ff',
              marginBottom: '2rem',
              fontWeight: 'bold',
            }}>Contact Us</h1>
            <p style={{
              fontSize: '1.2rem',
              color: 'white',
              marginBottom: '2rem',
            }}>We'd love to hear from you! Feel free to reach out with any questions or to schedule a detailing appointment.</p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              color: 'white',
              fontSize: '1.1rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FaPhone color="#0094ff" />
                <span>931-303-4942</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FaEnvelope color="#0094ff" />
                <span>alex.drivewaydetail@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FaMapMarkerAlt color="#0094ff" />
                <span>Cookeville, TN</span>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div style={{ position: 'relative' }}>
                <FaUser style={{ position: 'absolute', top: '12px', left: '10px', color: '#0094ff' }} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  style={{
                    width: '85%',
                    padding: '0.75rem 2.5rem',
                    fontSize: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '4px'
                  }}
                />
              </div>
              <div style={{ position: 'relative' }}>
                <FaEnvelope style={{ position: 'absolute', top: '12px', left: '10px', color: '#0094ff' }} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  style={{
                    width: '85%',
                    padding: '0.75rem 2.5rem',
                    fontSize: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '4px'
                  }}
                />
              </div>
              <div style={{ position: 'relative' }}>
                <FaComment style={{ position: 'absolute', top: '12px', left: '10px', color: '#0094ff' }} />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  style={{
                    width: '85%',
                    padding: '0.75rem 2.5rem',
                    fontSize: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '4px',
                    minHeight: '150px'
                  }}
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  backgroundColor: isSubmitting ? '#cccccc' : '#0094ff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitMessage && (
                <div style={{
                  marginTop: '1rem',
                  padding: '0.75rem',
                  backgroundColor: submitMessage.includes('Oops') ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 0, 0.1)',
                  color: 'white',
                  borderRadius: '4px',
                  textAlign: 'center'
                }}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;