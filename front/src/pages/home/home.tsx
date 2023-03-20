import React, { useState, useEffect } from 'react';
import './home.css';


export const Home: React.FC = () => {
  return (
    <div className='home-page'>
      <div className='home-left'>
        <h1 className='home-title'>Welcome to the bitcoin address explorer</h1>
        <p className='home-subtitle'>Enter a bitcoin address in the search bar to see the transactions</p>
      </div>
      <img className='home-image' src={require('../../ressources/bitcoin-3d-illustration-free-png.webp')}/>
    </div>
  );
};