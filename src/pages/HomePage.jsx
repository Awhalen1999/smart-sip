import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.png';
import bartenderImage from '../assets/bartender-image.png';
import ingredientsImage from '../assets/ingredients-image.png';
import recipesImage from '../assets/recipes-image.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className='font-main'>
      <div className='mt-4'>
        {/* hero */}
        <div className='hero'>
          <div className='hero-content flex-col lg:flex-row'>
            <img src={heroImage} className='max-w-sm rounded-lg shadow-2xl' />
            <div className='ml-10'>
              <h1 className='text-5xl font-bold font-header text-base-content'>
                SmartSip AI
              </h1>
              <p className='py-6 text-lg font-semibold'>
                Create and discover amazing new drinks with the help of our AI
                bartender.
              </p>
              <button
                onClick={() => navigate('/bartender')}
                className='btn btn-primary text-primary-content text-lg py-2 px-6 font-semibold'
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/* features */}
        <div className='p-10'>
          <div className='text-lg font-semibold mt-4 ml-2'>
            Get started with these key features
          </div>
          <div className='mt-6 font-main mx-auto flex justify-between gap-x-12'>
            <Link
              to='/bartender'
              className='item transform transition duration-300 ease-in-out hover:scale-105'
            >
              <img
                src={bartenderImage}
                alt='bartender image'
                className='rounded-xl'
              />
              <h2 className='my-2 font-semibold text-xl'>Bartender</h2>
              <p>
                Whatever you're in the mood for, our AI bartender can make it
                happen.
              </p>
            </Link>

            <Link
              to='/ingredients'
              className='item transform transition duration-300 ease-in-out hover:scale-105'
            >
              <img
                src={ingredientsImage}
                alt='ingredients image'
                className='rounded-xl'
              />
              <h2 className='my-2 font-semibold text-xl'>Ingredients</h2>

              <p>
                Save your own ingredients, and our AI bartender will customize
                drinks based on your selections.
              </p>
            </Link>

            <Link
              to='/saved-recipes'
              className='item transform transition duration-300 ease-in-out hover:scale-105'
            >
              <img
                src={recipesImage}
                alt='recipes image'
                className='rounded-xl'
              />
              <h2 className='my-2 font-semibold text-xl'>Recipes</h2>
              <p>
                Save and share your favorite drinks, and explore other popular
                selections.
              </p>
            </Link>
          </div>
        </div>
        {/* footer */}
        <footer className='footer items-center p-4 bg-base-200 text-base-content font-main'>
          <aside className='items-center grid-flow-col'>
            <p className='text-2xl font-header'>SmartSip</p>
            <p>Copyright © 2024 - All right reserved</p>
          </aside>
          <nav className='flex items-center grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
            <p>Contact me</p>
            <a
              href='https://www.linkedin.com/in/alex-whalen-0496b227b/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-3xl'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://github.com/Awhalen1999'
              target='_blank'
              rel='noopener noreferrer'
              className='text-3xl'
            >
              <FaGithub />
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
