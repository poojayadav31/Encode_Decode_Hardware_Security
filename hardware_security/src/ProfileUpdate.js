import React, { useState } from 'react';
import './ProfileUpdate.css';

const ProfileUpdate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    emailVerified: false,
    phoneVerified: false,
    otp: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVerify = (type) => {
    // Implement the OTP sending logic here
    console.log(`Sending OTP to ${formData[type]}`);
  };

  const handleOTPSubmit = (type) => {
    // Implement the OTP verification logic here
    console.log(`Verifying OTP for ${type}`);
    // If OTP is correct:
    setFormData({ ...formData, [`${type}Verified`]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the profile update logic here
    console.log('Profile Updated:', formData);
  };

  return (
    <div className="profileupdate-container">
      <div className="profileupdate-form-card">
        <h2>Update Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="profileupdate-form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="profileupdate-input"
            />
          </div>
          <div className="profileupdate-form-group">
            <label>Email Address</label>
            <div className="profileupdate-input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="profileupdate-input"
              />
              <button
                type="button"
                className="profileupdate-btn-verify1"
                onClick={() => handleVerify('email')}
              >
                {formData.emailVerified ? 'Verified' : 'Verify'}
              </button>
            </div>
          </div>
          <div className="profileupdate-form-group">
            <label>Phone Number</label>
            <div className="profileupdate-input-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="profileupdate-input"
              />
              <button
                type="button"
                className="profileupdate-btn-verify2"
                onClick={() => handleVerify('phone')}
              >
                {formData.phoneVerified ? 'Verified' : 'Verify'}
              </button>
            </div>
          </div>
          <div className="profileupdate-form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="profileupdate-input"
            />
          </div>
          <div className="profileupdate-form-group profileupdate-buttons-group">
            <button
              type="submit"
              className="profileupdate-btn-primary"
              disabled={!formData.emailVerified || !formData.phoneVerified}
            >
              Update Profile
            </button>
            <button type="button" className="profileupdate-btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
