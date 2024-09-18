import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './Resetpassword.css';

function Resetpassword() {
  const [formData, setFormData] = useState({
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
        newPassword: '',
        confirmPassword: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="Resetpassword-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="Resetpassword-field">
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
          />
          {errors.newPassword && <span className="Resetpassword-error">{errors.newPassword}</span>}
        </div>

        <div className="Resetpassword-field">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="Resetpassword-error">{errors.confirmPassword}</span>
          )}
        </div>

        <button type="submit" className="Resetpassword-submit">Reset Password</button>
      </form>
    </div>
  );
}

export default Resetpassword;
