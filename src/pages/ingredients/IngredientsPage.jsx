import React, { useState } from 'react';
import AvailableIngredients from './AvailableIngredients';
import SelectedIngredients from './SelectedIngredients';

const IngredientsPage = () => {
  const [activeTab, setActiveTab] = useState('available');

  const renderTabButton = (tabName, displayName) => (
    <li className='me-2'>
      <a
        href='#'
        onClick={() => setActiveTab(tabName)}
        className={`inline-block p-4 rounded-t-lg ${
          activeTab === tabName
            ? 'text-primary-content bg-primary'
            : 'hover:text-accent-content hover:bg-accent'
        }`}
      >
        {displayName}
      </a>
    </li>
  );

  return (
    <div>
      <ul className='ml-1 pt-4 flex flex-wrap text-sm font-medium text-center border-b border-accent'>
        {renderTabButton('available', 'Available Ingredients')}
        {renderTabButton('selected', 'Selected Ingredients')}
      </ul>
      {activeTab === 'available' && <AvailableIngredients />}
      {activeTab === 'selected' && <SelectedIngredients />}
    </div>
  );
};

export default IngredientsPage;
