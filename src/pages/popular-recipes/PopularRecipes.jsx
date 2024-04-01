import React from 'react';
import popularDrinks from './PopularRecipeList';
import { FaChevronDown } from 'react-icons/fa';

const PopularRecipes = () => {
  return (
    <div>
      {popularDrinks.map((drink, index) => (
        <details key={index} className='collapse bg-base-200 rounded-lg p-4'>
          <summary className='collapse-title text-xl font-medium'>
            <div className='flex justify-between items-center w-full'>
              <div className='flex items-center'>
                <span className='mr-4'>{drink.title}</span>{' '}
                <FaChevronDown size={18} />
              </div>
            </div>
          </summary>
          <div className='divider'></div>
          <div className='collapse-content'>
            <p className='mt-2 text-lg font-semibold'>Description:</p>
            <p className='mt-1'>{drink.description}</p>
            <p className='mt-4 text-lg font-semibold'>Recipe:</p>
            <p className='mt-1'>{drink.recipe}</p>
          </div>
        </details>
      ))}
    </div>
  );
};

export default PopularRecipes;
