import React, { useState, useEffect } from 'react';
import {
  getSettingFromLocalStorage,
  saveSettingsToLocalStorage,
} from '../../utils/api';

const defaultSettings = {
  useSavedIngredients: false,
  nonAlcoholicMode: false,
  showBackground: false,
  showBartenderImage: false,
};

const BartenderSettings = ({ updateSettings }) => {
  const [settings, setSettings] = useState(defaultSettings);

  useEffect(() => {
    const initialSettings = Object.keys(defaultSettings).reduce((acc, key) => {
      acc[key] = getSettingFromLocalStorage(key) || defaultSettings[key];
      return acc;
    }, {});
    setSettings(initialSettings);
  }, []);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const newSettings = { ...settings, [name]: checked };
    setSettings(newSettings);
    saveSettingsToLocalStorage(name, checked);
    updateSettings();
  };

  const renderSetting = (name, label, description) => (
    <div>
      <label className='flex items-center space-x-3 mb-1'>
        <input
          type='checkbox'
          className='toggle toggle-success'
          name={name}
          checked={settings[name]}
          onChange={handleCheckboxChange}
        />
        <span>{label}</span>
      </label>
      <p className='text-sm text-neutral-content'>{description}</p>
    </div>
  );

  return (
    <div className='p-4 space-y-4'>
      <h1 className='text-lg font-semibold'>Bartender Settings</h1>
      {renderSetting(
        'useSavedIngredients',
        'Use Saved Ingredients',
        'Enable this setting to allow the AI bartender to utilize previously saved ingredients from your profile for creating custom drinks.'
      )}
      {renderSetting(
        'nonAlcoholicMode',
        'Non-Alcoholic Mode',
        'Enable this mode for a selection of non-alcoholic drink options tailored to your preferences, perfect for those seeking refreshing alternatives.'
      )}
      {renderSetting(
        'showBackground',
        'Show Background',
        'Enable this setting to display a unique background for each bartender, setting the ambiance for your virtual bartending experience.'
      )}
      {renderSetting(
        'showBartenderImage',
        'Show Bartender Image',
        'Enable this option to reveal a charming image of the AI bartender, enhancing the visual appeal and personal connection to your cocktail creation journey.'
      )}
    </div>
  );
};

export default BartenderSettings;
