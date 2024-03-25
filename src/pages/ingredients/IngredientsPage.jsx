import React from 'react';
import AvailableIngredients from './AvailableIngredients';
import SelectedIngredients from './SelectedIngredients';

const IngredientsPage = () => {
  return (
    <div className='flex justify-center mt-8'>
      <div role='tablist' className='tabs tabs-bordered'>
        <input
          type='radio'
          id='tab1'
          name='my_tabs_1'
          role='tab'
          className='tab'
          aria-label='Available Ingredients'
          aria-controls='panel1'
          checked
        />
        <div
          id='panel1'
          role='tabpanel'
          className='tab-content p-10 w-full'
          aria-labelledby='tab1'
        >
          <AvailableIngredients />
        </div>

        <input
          type='radio'
          id='tab2'
          name='my_tabs_1'
          role='tab'
          className='tab'
          aria-label='Selected Ingredients'
          aria-controls='panel2'
        />
        <div
          id='panel2'
          role='tabpanel'
          className='tab-content p-10 w-full'
          aria-labelledby='tab2'
        >
          <SelectedIngredients />
        </div>
      </div>
    </div>
  );
};

export default IngredientsPage;
