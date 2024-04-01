import React, { useState } from 'react';
import AvailableIngredients from './AvailableIngredients';
import SelectedIngredients from './SelectedIngredients';

const IngredientsPage = () => {
  const [activeTab, setActiveTab] = useState('available');

  return (
    <div>
      <ul className='flex flex-wrap text-sm font-medium text-center border-b border-accent'>
        <li className='me-2'>
          <a
            href='#'
            onClick={() => setActiveTab('available')}
            aria-current='page'
            className={`inline-block p-4 rounded-t-lg ${
              activeTab === 'available'
                ? 'text-primary-content bg-primary '
                : 'hover:text-accent-content hover:bg-accent '
            }`}
          >
            Available Ingredients
          </a>
        </li>
        <li className='me-2'>
          <a
            href='#'
            onClick={() => setActiveTab('selected')}
            className={`inline-block p-4 rounded-t-lg ${
              activeTab === 'selected'
                ? 'text-primary-content bg-primary '
                : 'hover:text-accent-content hover:bg-accent '
            }`}
          >
            Selected Ingredients
          </a>
        </li>
      </ul>
      {activeTab === 'available' && <AvailableIngredients />}
      {activeTab === 'selected' && <SelectedIngredients />}
    </div>
  );
};

export default IngredientsPage;
