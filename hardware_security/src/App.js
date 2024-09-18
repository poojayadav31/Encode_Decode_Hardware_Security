import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route ,useLocation} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Signup from './Signup';
import Services from './Services';
import About from './About';
import EncodeDecode from './EncodeDecode';
import LoginPage from './LoginPage';
import Contact from './Contact';
import AES from './AES.js'
import Base64 from './Base64.js'
import TermsAndConditions from './TermsAndConditions.js'
import ForgetPassword from './ForgetPassword.js';
import PageNotFound from './PageNotFound.js';
import ProfileUpdate from './ProfileUpdate.js';
import Changepassword from './Changepassword.js';
import Resetpassword from './Resetpassword.js';
import FeedbackForm from './FeedbackForm.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');

    if (storedIsLoggedIn === 'true' && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const login = (name) => {
    setIsLoggedIn(true);
    setUsername(name);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', name);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} username={username} logout={logout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/encodedecode" element={<EncodeDecode />} />
          <Route path="/encodedecode/AES" element={<AES />} />
          <Route path="/encodedecode/Base64" element={<Base64 />} />
          <Route path="/service" element={<Services />} />
          <Route path="/login" element={<LoginPage login={login} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgetPassword/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/Changepassword" element={<Changepassword/>} />
          <Route path="/Resetpassword" element={<Resetpassword/>} />
          <Route path="/ProfileUpdate" element={<ProfileUpdate/>} />
          <Route path="/FeedbackForm" element={<FeedbackForm/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
