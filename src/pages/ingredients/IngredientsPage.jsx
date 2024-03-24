import React from 'react';

const IngredientsPage = () => {
  return (
    <div className='flex justify-center mt-8'>
      <div role='tablist' className='tabs tabs-bordered'>
        <input
          type='radio'
          name='my_tabs_1'
          role='tab'
          className='tab'
          aria-label='Available Ingredients'
          checked
        />
        <div role='tabpanel' className='tab-content p-10'>
          Available Ingredients Content
        </div>

        <input
          type='radio'
          name='my_tabs_1'
          role='tab'
          className='tab'
          aria-label='Selected Ingredients'
        />
        <div role='tabpanel' className='tab-content p-10'>
          Selected Ingredients Content
        </div>
      </div>
    </div>
  );
};

export default IngredientsPage;
