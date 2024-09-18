import React from 'react';
import './Home.css';
import Background from './Image/background.png';

function Home() {
  return (
    <div className='main-home'>
      <div className='home-bgdiv'>
        <img src={Background} className='background' alt="background" />
        <div className='home-text-overlay'>
          <h1 className='home-AES'style={{color: 'white'}}>AES</h1>
          <h3 className='home-h3'>Encode Decode</h3>
          <p className='home-p1'>Hardware Security</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
