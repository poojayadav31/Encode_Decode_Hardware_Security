// src/components/ForgetPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './ForgetPassword.css';

const ForgetPassword = () => {
  const [step, setStep] = useState(1); // 1: Request reset, 2: Enter OTP, 3: Reset Password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRequestReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://your-backend-url/api/request-reset/', { email });
      setMessage(response.data.message);
      setError('');
      setStep(2);
    } catch (error) {
      setError('Error sending reset link. Please try again.');
      setMessage('');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://your-backend-url/api/verify-otp/', { email, otp });
      setMessage(response.data.message);
      setError('');
      setStep(3);
    } catch (error) {
      setError('Invalid OTP. Please try again.');
      setMessage('');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      const response = await axios.post('http://your-backend-url/api/reset-password/', { email, otp, newPassword });
      setMessage(response.data.message);
      setError('');
      setStep(1);
      setEmail('');
      setOtp('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setError('Error resetting password. Please try again.');
      setMessage('');
    }
  };

  const handleResetnewPassword = () => {
    navigate('/Resetpassword'); 
  };

  return (
    <div className="forget-password-container">
      <h2>Forget Password</h2>
      {step === 1 && (
        <form onSubmit={handleRequestReset} className="forget-password-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
          <button type="submit" onClick={handleResetnewPassword} className="form-button">Send Reset Link</button>
        </form>
      )}
      {/* {step === 2 && (
        <form onSubmit={handleVerifyOtp} className="forget-password-form">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="form-input"
          />
          <button type="submit" className="form-button">Verify OTP</button>
        </form>
      )} */}
      {/* {step === 3 && (
        <form onSubmit={handleResetPassword} className="forget-password-form">
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="form-input"
          />
          <button type="submit" className="form-button">Reset Password</button>
        </form>
      )} */}
      {/* {message && <p className="message success">{message}</p>}
      {error && <p className="message error">{error}</p>} */}
    </div>
  );
};

export default ForgetPassword;
