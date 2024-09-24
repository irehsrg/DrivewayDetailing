import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
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

    // Send only the notification email
    emailjs.send('service_s9f2xo6', 'template_pdvf3nr', formData, 'I2YKtXsJPsgVC6LL-')
    .then((response) => {
      console.log('Notification email sent successfully:', response);
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
    <>
      <Helmet>
        <title>Contact Driveway Detailing | Car Detailing in Cookeville, TN</title>
        <meta name="description" content="Contact Driveway Detailing for professional car detailing services in Cookeville, TN. Schedule an appointment or ask questions about our exterior and interior detailing services." />
        <meta name="keywords" content="contact driveway detailing, car detailing Cookeville, schedule detailing, detailing questions" />
        <link rel="canonical" href="https://dwdetail.com/contact" />
        <meta property="og:title" content="Contact Driveway Detailing | Car Detailing in Cookeville, TN" />
        <meta property="og:description" content="Contact Driveway Detailing for professional car detailing services in Cookeville, TN. Schedule an appointment or ask questions about our exterior and interior detailing services." />
        <meta property="og:url" content="https://dwdetail.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="contact-page">
        <Navbar />
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <h1>Contact Us</h1>
              <p>We'd love to hear from you! Feel free to reach out with any questions or to schedule a detailing appointment.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <FaPhone color="#0094ff" />
                  <span>931-303-4942</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope color="#0094ff" />
                  <span>alex.drivewaydetail@gmail.com</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt color="#0094ff" />
                  <span>Cookeville, TN</span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <FaUser className="icon" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <FaEnvelope className="icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <FaComment className="icon" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="submit-button"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes('Oops') ? 'error' : 'success'}`}>
                  {submitMessage}
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;