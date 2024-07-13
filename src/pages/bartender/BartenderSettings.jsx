import React, { useState, useEffect } from 'react';
import {
  getSettingFromLocalStorage,
  saveSettingsToLocalStorage,
} from '../../utils/api';

const defaultSettings = {
  useSavedIngredients: false,
  nonAlcoholicMode: false,
  hideBackground: false,
  hideBartenderImage: false,
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
        'hideBackground',
        'Hide Background',
        'Enable this setting to hide the unique background for each bartender. By default, a unique background is displayed for each bartender, setting the ambiance for your virtual bartending experience.'
      )}
      {renderSetting(
        'hideBartenderImage',
        'Hide Bartender Image',
        'Enable this option to hide the image of the AI bartender. By default, a charming image of the AI bartender is displayed, enhancing the visual appeal and personal connection to your cocktail creation journey.'
      )}
    </div>
  );
};

export default BartenderSettings;
