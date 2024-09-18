import React, { useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import CSPDCL from './Image/CSPDCL Logo.png';
import Logoimg from './Image/logoimg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faKey, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Alert } from 'antd';

const Header = ({ isLoggedIn, logout}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleUserIconClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem('name')
    localStorage.removeItem('user_id')
    navigate('/home');
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      console.log("User logged out");
    } else {
      console.log("Logout canceled");
    }
  };
 
  const handleChangePassword = () => {
    navigate('/Changepassword'); 
  };

  const handleProfileUpdate = () => {
    navigate('/ProfileUpdate'); 
  };
  
  const username = localStorage.getItem('name')
  return (
    <div>
      <div className="header">
        <div className="header-top">
          {/* <img src={CSPDCL} alt="CPDCL Logo" className="header-cspdcllogo" /> */}
          <a href="https://cspdcl.co.in/cseb/" target='blank'><img src={CSPDCL} alt="CPDCL Logo" className="header-cspdcllogo" /></a>
          <div className="header-social-icons">
            <Link to="https://facebook.com"><FaFacebookF /></Link>
            <Link to="https://instagram.com"><FaInstagram /></Link>
            <Link to="https://twitter.com"><FaTwitter /></Link>
            <Link to="https://linkedin.com"><FaLinkedinIn /></Link>
          </div>
        </div>
        <div className="header-bottom">
          <div className="header-encodeco">
            <img src={Logoimg} alt="Encode Decode Logo" className="header-encodeco-logo" />
            <div className="header-encodeco-text">
              <h1>Encode Decode</h1>
              <p>Hardware Security</p>
            </div>
          </div>
          <div className="header-right-section">
            <div className="header-nav-toggle" onClick={handleNavToggle}>
              {isNavOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div className={`header-nav-links ${isNavOpen ? 'open' : ''}`}>
              <Link to="/home">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to={localStorage.getItem('isLoggedIn')?  "/encodedecode":"/login"}>Encode-Decode</Link>
              <Link to="/service">Services</Link>
            </div>
            {isLoggedIn ? (
              <div className="header-user-section" onClick={handleUserIconClick}>
                <span className="header-username">{username}</span>
                <FaUserCircle className="header-user-icon" />
                {isUserMenuOpen && (
                  <div className="header-user-menu">
                    <button onClick={handleProfileUpdate}><FontAwesomeIcon icon={faUserEdit} />  Profile Update</button>
                    <button onClick={handleChangePassword}><FontAwesomeIcon icon={faKey} />  Change Password</button>
                    <button onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} />  Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login"><button className="header-login-btn">Login</button></Link>
            )}
          </div>
        </div>
      </div>
      <hr />
      <div className='header-scroll-div'>
        <div className="header-scrolling-text">
          Note: Do you want to Encode and Decode your data? Then this site is perfect for you! Use our super handy online tool to encode or decode your data.
        </div>
      </div>
    </div>
  );
};

export default Header;
