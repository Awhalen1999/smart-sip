import React from 'react';
import heroImage from '../../assets/hero-image.png';
import { Link } from 'react-router-dom';

const hero = () => {
  return (
    <div className='hero mt-12 font-main'>
      <div className='hero-content flex-col lg:flex-row'>
        <img src={heroImage} className='max-w-sm rounded-xl shadow-2xl mr-10' />
        <div>
          <h1 className='text-5xl font-bold font-header text-primary'>
            SmartSip AI
          </h1>
          <p className='py-6 text-lg font-semibold'>
            Create and discover amazing new drinks with the help of our AI
            bartender.
          </p>
          <Link
            to='/bartender'
            className='btn btn-primary text-primary-content text-lg py-2 px-6 font-semibold'
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default hero;
