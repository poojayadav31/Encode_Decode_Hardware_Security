import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Feedback submitted:', formData);
  };

  return (
    <div className="feedback-form-container">
      <div className="feedback-form-card">
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="feedback-form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="feedback-form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="feedback-form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          <div className="feedback-form-buttons-group">
            <button type="submit" className="feedback-form-btn-submit">Submit</button>
            <button type="reset" className="feedback-form-btn-reset">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
