import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Changepassword.css';

function Changepassword() {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.oldPassword) {
      valid = false;
      newErrors.oldPassword = 'Old password is required';
    }

    if (!formData.newPassword) {
      valid = false;
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 6) {
      valid = false;
      newErrors.newPassword = 'New password must be at least 6 characters';
    }

    if (formData.confirmPassword !== formData.newPassword) {
      valid = false;
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form
      console.log('Form submitted successfully:', formData);
      // Reset form
      setFormData({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="Changepassword-container">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="Changepassword-field">
          <input
            type="password"
            name="oldPassword"
            placeholder="Old Password"
            value={formData.oldPassword}
            onChange={handleChange}
          />
          {errors.oldPassword && <span className="Changepassword-error">{errors.oldPassword}</span>}
        </div>

        <div className="Changepassword-field">
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
          />
          {errors.newPassword && <span className="Changepassword-error">{errors.newPassword}</span>}
        </div>

        <div className="Changepassword-field">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="Changepassword-error">{errors.confirmPassword}</span>
          )}
        </div>

        <Link to='/forgot-password' className="Changepassword-forgot">Forgot Password?</Link> 

        <button type="submit" className="Changepassword-submit">Change Password</button>
      </form>
    </div>
  );
}

export default Changepassword;
