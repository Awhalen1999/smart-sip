import React from 'react';
import heroImage from '../../assets/hero-image.png';

const hero = () => {
  return (
    <div className='hero mt-12 bg-base-100 font-main'>
      <div className='hero-content flex-col lg:flex-row'>
        <img src={heroImage} className='max-w-sm rounded-xl shadow-2xl mr-10' />
        <div>
          <h1 className='text-5xl font-bold font-header'>SmartSip AI</h1>
          <p className='py-6 text-lg font-semibold'>
            Create and discover amazing new drinks with the help of our AI
            bartender.
          </p>
          <button className='btn btn-primary text-lg py-2 px-6 font-semibold'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default hero;
