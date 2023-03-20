import React from 'react';
import './notFound.css';

interface NotFoundProps {
  address: string | undefined;
}

export const NotFound: React.FC<NotFoundProps> = ({ address }) => {
  return (
    <div className='not-found-container'>
      <p className='not-found-title'>Oops! We couldn&#39;t find what you are looking for...</p>
      <p className='not-found-text'> <span className='not-found-address'>{address}</span> not found
      <br/>
      Please check the address and try again.
      </p>
      <img className='not-found-image' src={require('../../ressources/not-found1.gif')} alt="not found" />
    </div>
  );
}