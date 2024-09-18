import React, { useState,useRef } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { ContactMessage } from './Api/CoreApi'; // Ensure this function is implemented correctly
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await ContactMessage(formData);

      if (response?.success) {
        // toast.success(response?.success)
        toast.success('Your message has been sent successfully!');
      } else {
        toast.error(response.error || 'Failed to send your message. Please try again.');
      }

    } catch (err) {
      toast.error('Failed to send your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  const sendEmail = async(e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o79bdh8', 'template_l3vaed8', form.current, {
        publicKey: '4ZdFNBhLq5pttc9q2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setLoading(true);
      try {
        const response = await ContactMessage(form.current);
  
        if (response?.success) {
          // toast.success(response?.success)
          toast.success('Your message has been sent successfully!');
        } else {
          toast.error(response.error || 'Failed to send your message. Please try again.');
        }
  
      } catch (err) {
        toast.error('Failed to send your message. Please try again.');
      } finally {
        setLoading(false);
      }
  };
  return (
    <div className="contact-container">
      <ToastContainer />
      <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or need support, feel free to reach out to us through our contact form or support page.</p><br/><br/>
      </div>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Contact Us For More Info</h2>
          <address>
            <p><FaMapMarkerAlt /> Raipur, Chhattisgarh, India.</p>
            <p><FaPhone /> +91-9876543210 (Mon - Fri, 10AM - 6PM)</p>
            <p><FaEnvelope /> support@encode-decode.com (24X7)</p>
          </address>
        </div>
        <div className="contact-form">
          <h2>Drop Your Query</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="contact-input-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                // value={formData.name}
                // onChange={handleChange}
                required
              />
            </div>
            <div className="contact-input-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                // value={formData.email}
                // onChange={handleChange}
                required
              />
            </div>
            <div className="contact-input-group">
              <label htmlFor="number">Your Number</label>
              <input
                type="text"
                id="number"
                name="number"
                placeholder="Enter Your 10 digit mobile Number"
                // value={formData.number}
                // onChange={handleChange}
                required
              />
            </div>
            <div className="contact-input-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Please describe your Query in detail."
                // value={formData.message}
                // onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="contact-button" disabled={loading}>
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
