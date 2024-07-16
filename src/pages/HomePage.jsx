import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.png';
import bartenderImage from '../assets/bartender-image.png';
import ingredientsImage from '../assets/ingredients-image.png';
import recipesImage from '../assets/recipes-image.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const HomePage = () => {
  const features = [
    {
      name: 'Bartender',
      route: '/bartender',
      image: bartenderImage,
      description:
        "Whatever you're in the mood for, our AI bartender can make it happen.",
    },
    {
      name: 'Ingredients',
      route: '/ingredients',
      image: ingredientsImage,
      description:
        'Save your own ingredients, and our AI bartender will customize drinks based on your selections.',
    },
    {
      name: 'Recipes',
      route: '/saved-recipes',
      image: recipesImage,
      description:
        'Save and share your favorite drinks, and explore other popular selections.',
    },
  ];

  return (
    <div className='font-main'>
      <div className='mt-4'>
        {/* hero */}
        <div className='hero'>
          <div className='hero-content flex flex-col lg:flex-row flex-wrap items-center lg:items-start'>
            <img
              src={heroImage}
              className='w-full lg:max-w-sm max-w-full rounded-lg shadow-2xl mb-6 lg:mb-0'
            />
            <div className='lg:ml-10 text-center lg:text-left'>
              <h1 className='text-5xl font-bold font-header text-base-content'>
                SmartSip AI
              </h1>
              <p className='py-6 text-lg font-semibold'>
                Create and discover amazing new drinks with the help of our AI
                bartender.
              </p>
              <Link
                to='/bartender'
                className='btn btn-primary text-primary-content text-lg py-2
        px-6 font-semibold'
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        {/* features */}
        <div className='p-10'>
          <div className='text-lg font-semibold mt-4 ml-2'>
            Get started with these key features
          </div>
          <div className='mt-6 font-main mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {features.map((feature, index) => (
              <div
                key={index}
                className=' rounded-xl transform hover:scale-105 relative z-10'
              >
                <Link
                  to={feature.route}
                  className='text-xl bg-transparent flex flex-col items-center'
                >
                  <img
                    src={feature.image}
                    alt={`${feature.name} image`}
                    className='w-full h-auto object-cover rounded-t-lg'
                  />
                  <div className='text-primary-content font-bold bg-primary rounded-b-lg hover:bg-accent w-full text-center'>
                    {feature.name}
                  </div>
                  <p className='p-4'>{feature.description}</p>
                </Link>
              </div>
            ))}
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
