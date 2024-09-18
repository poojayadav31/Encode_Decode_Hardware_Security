import React, { useState } from 'react';
import './Signup.css';
import Signupimg from './Image/signupimg.png';
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { Empregister, verifyOtp,send_otp } from './Api/CoreApi';
import { Modal, Button, Input } from 'antd'

const Signup = () => {
  const [formData, setFormData] = useState({
    Username: '',
    email: '',
    password: '',
    confirm_Password: '',
    dob: '',
    phoneNumber: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [otpOpen, setOtpOpen] = useState(false); // State to control OTP modal visibility
  const [otpVerified, setOtpVerified] = useState(false); // State to check OTP verification status
  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: fieldValue });
  };
  const handleChangeOtp = (e) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const response=await send_otp({'email':formData.email})
      if (response.success === 'OTP send successfully') {
      setOtpOpen(true)
      }else{
        message.error('Something went wrong')
      }
    };
  }


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     try {
  //       setOtpOpen(true)
  //       const response = await Empregister(formData);
  //       console.log(response, "$%^&*()"); // Debug log
  //       const username = response.Username;
  //       localStorage.setItem('response', username); // Assuming Empregister is an async function

  //       if (response.success) { // Assuming the response contains a success field
  //         setOtpOpen(true); // Show OTP modal on successful initial registration
  //         message.success('Sign-up successful! Please enter the OTP sent to your email.');
  //       } else {
  //         message.error('Sign-up failed. Please try again.');
  //       }
  //     } catch (error) {
  //       message.error('An error occurred. Please try again.');
  //     }
  //   } else {
  //     message.error('Validation errors. Please check the form.');
  //   }
  // };




  const handleOtpVerify = async (otp) => {
    try {
      const response = await verifyOtp(formData.email, otp);
      if (response.success) { // Assuming the response contains a success field
        setOtpVerified(true);
        message.success('OTP verification successful! Registration complete.');
      } else {
        message.error('OTP verification failed. Please try again.');
      }
      setOtpOpen(false); // Close OTP modal
    } catch (error) {
      message.error('An error occurred. Please try again.');
    }
  };

  const handleOtpCancel = () => {
    setOtpOpen(false);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.Username.trim()) {
      errors.Username = 'Full name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    if (formData.password !== formData.confirm_Password) {
      errors.confirm_Password = 'Passwords do not match';
      isValid = false;
    }

    if (!formData.dob.trim()) {
      errors.dob = 'Date of birth is required';
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber.trim())) {
      errors.phoneNumber = 'Phone number must contain exactly 10 digits';
      isValid = false;
    }

    if (!formData.agreeTerms) {
      errors.agreeTerms = 'You must agree to the terms and conditions';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const navigate = useNavigate()


  const handleVerify = async () => {
    if (otp.length === 6) {
      console.log({'otp':otp,'email':formData.email})
      const res = await verifyOtp({'otp':otp,'email':formData.email});
      if (res.success === 'OTP verified successfully') {
        setOtpOpen(false)
        const response = await Empregister(formData);
        if (response.success==='Created successfully') { // Assuming the response contains a success field
          setOtpOpen(false); // Show OTP modal on successful initial registration
          message.success('Sign-up successful!');
          navigate('/login')
        } else {
          message.error('Sign-up failed. Please try again.');
        }
      }
      else{
        message.error('OTP verification failed. Please try again.');
      }
    } else {
      message.error('OTP must be 6 digits');
    }
  };
  return (
    <div className='main-signup'>

      <Modal
        open={otpOpen}
        title="Enter OTP"
        onCancel={handleOtpCancel}
        footer={[
          <Button key="cancel" onClick={handleOtpCancel}>
            Cancel
          </Button>,
          <Button key="verify" type="primary" onClick={handleVerify}>
            Verify
          </Button>,
        ]}
      >
    <input
  type="text"
  placeholder="Enter 6-digit OTP"
  value={otp}
  onChange={handleChangeOtp}
  maxLength={6}
/>

      </Modal>

      <div className='picture-div'>
        <h1 className='h1-1'>Welcome to ENCODE DECODE Hardware Security</h1>
        <img src={Signupimg} alt='signupimg' className='signupimg' />
      </div>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="Username"
            placeholder="Full Name"
            value={formData.Username}
            onChange={handleChange}
          />
          {errors.Username && <span className="error">{errors.Username}</span>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
          <input
            type="password"
            name="confirm_Password"
            placeholder="Confirm Password"
            value={formData.confirm_Password}
            onChange={handleChange}
          />
          {errors.confirm_Password && (
            <span className="error">{errors.confirm_Password}</span>
          )}
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <span className="error">{errors.dob}</span>}
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && (
            <span className="error">{errors.phoneNumber}</span>
          )}<br/>
          <div>
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            I agree to the terms and conditions
          </div>
          {errors.agreeTerms && (
            <span className="error">{errors.agreeTerms}</span>
          )}
          <br />
          <button type="submit">Sign Up</button>
        </form>
        <div className="login-text">Already have an account? <Link to='/login'>Login here</Link></div>
      </div><br/>
      {/* <OTPModal 
      style={{color:'red'}}
        open={otpOpen} 
        onVerify={handleOtpVerify} 
        onCancel={handleOtpCancel} 
      /> */}
    </div>
  );
};

export default Signup;
