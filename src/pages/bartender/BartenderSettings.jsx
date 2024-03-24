import React from 'react';

const BartenderSettings = () => {
  return (
    <div className='p-4 space-y-4'>
      <h1 className='text-lg font-semibold'>Bartender Settings</h1>

      <div>
        <label className='flex items-center space-x-3 mb-1'>
          <input type='checkbox' className='toggle toggle-success' checked />
          <span>Use Saved Ingredients</span>
        </label>
        <p className='text-sm text-neutral-content'>
          Enable this setting to allow the AI bartender to utilize previously
          saved ingredients from your profile for creating custom drinks.
        </p>
      </div>

      <div>
        <label className='flex items-center space-x-3 mb-1'>
          <input type='checkbox' className='toggle toggle-success' checked />
          <span>Signature Style</span>
        </label>
        <p className='text-sm text-neutral-content'>
          Enable this feature to imbue the selected bartender's personality into
          the crafted recipes, adding a unique flair and character to each drink
          suggestion.
        </p>
      </div>

      <div>
        <label className='flex items-center space-x-3 mb-1'>
          <input type='checkbox' className='toggle toggle-success' />
          <span>Non-Alcoholic Mode</span>
        </label>
        <p className='text-sm text-neutral-content'>
          Enable this mode for a selection of non-alcoholic drink options
          tailored to your preferences, perfect for those seeking refreshing
          alternatives.
        </p>
      </div>

      <div>
        <label className='flex items-center space-x-3 mb-1'>
          <input type='checkbox' className='toggle toggle-success' checked />
          <span>Show Background</span>
        </label>
        <p className='text-sm text-neutral-content'>
          Enable this setting to display a unique background for each bartender,
          setting the ambiance for your virtual bartending experience.
        </p>
      </div>

      <div>
        <label className='flex items-center space-x-3 mb-1'>
          <input type='checkbox' className='toggle toggle-success' checked />
          <span>Show Bartender Image</span>
        </label>
        <p className='text-sm text-neutral-content'>
          Enable this option to reveal a charming image of the AI bartender,
          enhancing the visual appeal and personal connection to your cocktail
          creation journey.
        </p>
      </div>
    </div>
  );
};

export default BartenderSettings;
