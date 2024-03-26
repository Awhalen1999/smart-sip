import React, { useState } from 'react';
import AvailableIngredients from './AvailableIngredients';
import SelectedIngredients from './SelectedIngredients';

const IngredientsPage = () => {
  const [activeTab, setActiveTab] = useState('available');

  return (
    <div>
      <ul className='flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
        <li className='me-2'>
          <a
            href='#'
            onClick={() => setActiveTab('available')}
            aria-current='page'
            className={`inline-block p-4 rounded-t-lg ${
              activeTab === 'available'
                ? 'text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500'
                : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
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
                ? 'text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500'
                : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
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
