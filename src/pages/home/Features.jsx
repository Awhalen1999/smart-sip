import React from 'react';
import bartenderImage from '../../assets/bartender-image.png';
import ingredientsImage from '../../assets/ingredients-image.png';
import recipesImage from '../../assets/recipes-image.png';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className='w-[90vw] font-main mx-auto my-12'>
      <div className='text-3xl font-bold'>Features</div>
      <div className='text-lg font-semibold mt-2'>
        Get started with these key features
      </div>
      <div className='mt-8 font-main mx-auto flex justify-between gap-x-12'>
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
          <img src={recipesImage} alt='recipes image' className='rounded-xl' />
          <h2 className='my-2 font-semibold text-xl'>Recipes</h2>
          <p>
            Save and share your favorite drinks, and explore other popular
            selections.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Features;
