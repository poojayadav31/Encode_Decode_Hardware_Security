import React from 'react';
import './Services.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="service-page">
        <div className="service">
          <i className="fas fa-code service-icon"></i>
          <h2>Encoding Decoding</h2>
          <p>Encode and decode text using various algorithms. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a href="*" className="read-more">Read More</a>
        </div>
        <div className="service">
          <i className="fas fa-lock service-icon"></i>
          <h2>AES</h2>
          <p>Advanced Encryption Standard (AES) encryption and decryption. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a href="*" className="read-more">Read More</a>
        </div>
        <div className="service">
          <i className="fas fa-file-code service-icon"></i>
          <h2>Base64 Encode-Decode</h2>
          <p>Encode and decode text using Base64 encoding. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a href="*" className="read-more">Read More</a>
        </div>
        <div className="service">
          <i className="fas fa-shield-alt service-icon"></i>
          <h2>AES 128</h2>
          <p>AES encryption and decryption with a 128-bit key. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a href="*" className="read-more">Read More</a>
        </div>
        <div className="service">
          <i className="fas fa-shield-alt service-icon"></i>
          <h2>AES 192</h2>
          <p>AES encryption and decryption with a 192-bit key. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a href="*" className="read-more">Read More</a>
        </div>
        <div className="service">
          <i className="fas fa-shield-alt service-icon"></i>
          <h2>AES 256</h2>
          <p>AES encryption and decryption with a 256-bit key. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a href="*" className="read-more">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
