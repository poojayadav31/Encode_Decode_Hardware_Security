import React, { useState } from 'react';
import './LoginPage.css';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { EmpLogin } from './Api/CoreApi';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import FacebookLogin from 'react-facebook-login-lite';

const LoginForm = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      message.error('Please fill in both fields');
      return;
    }

    try {
      const response = await EmpLogin({ email, password, rememberMe });
      console.log(response,'res')
      if (response.success) {
        message.success('Login successful');
        navigate('/encodedecode')
        localStorage.setItem('name',response.name)
        localStorage.setItem('user_id',response.user_id)
        console.log('Form submitted:', { email, password, rememberMe });
        login(email); // Pass the email (or username) to the login function
      } else {
        message.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      message.error('An error occurred during login.');
    }
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log(response);
    // Handle successful login
    message.success('Login with Google successful');
    navigate('/encodedecode');
  };

  const handleGoogleLoginFailure = (response) => {
    console.error(response);
    message.error('Google login failed');
  };

  // const handleFacebookLogin = (response) => {
  //   console.log(response);
  //   // Handle successful login
  //   if (response.authResponse) {
  //     message.success('Login with Facebook successful');
  //     navigate('/encodedecode');
  //   } else {
  //     message.error('Facebook login failed');
  //   }
  // };


  return (
    <GoogleOAuthProvider clientId="646420378453-n0v9n4thr0htrdsfcne7a751slhb78fd.apps.googleusercontent.com">
    <div className="login-container">
      <div className="login-wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-group">
            <div htmlFor="email">Email:</div>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <div htmlFor="password">Password:</div>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="remember-forgot">
            <div className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </div>
            <Link to='/forgot-password' className="forgot-password">Forgot Password?</Link>
          </div>
          <button type="submit" className="login-button">Login</button>
          <p className="or">or login with</p>
          {/* <div className="social-login">
            <button type="button" className="google-button">
              <FaGoogle /> Google
            </button>
            <button type="button" className="facebook-button">
              <FaFacebook /> Facebook
            </button>
          </div><br /> */}
          <div className="social-login">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onFailure={handleGoogleLoginFailure}
              />
              {/* <FacebookLogin
                appId="YOUR_FACEBOOK_APP_ID"
                onSuccess={handleFacebookLogin}
                onFailure={handleFacebookLogin}
                render={({ onClick }) => (
                  <button onClick={onClick} className="facebook-button">
                    <FaFacebook /> Facebook
                  </button>
                )}
              /> */}
            </div><br />
          <div className="signup-text">Doesn't have an account yet? <Link to='/Signup'>Sign Up</Link></div>
        </form>
      </div>
    </div>
    </GoogleOAuthProvider>
  );
};

export default LoginForm;
