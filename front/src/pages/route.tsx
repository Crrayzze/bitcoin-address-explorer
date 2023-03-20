import  { Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Address } from './address/address';
import React from 'react';

export const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:address" element={<Address />} />
      </Routes>
    </div>
  );
};