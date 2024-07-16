import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdMenuOpen, MdPersonOutline } from 'react-icons/md';
import { CiBoxList, CiReceipt } from 'react-icons/ci';
import { FaRegStar } from 'react-icons/fa';
import { IoSettingsOutline, IoClose } from 'react-icons/io5';
import BartenderInfo from './BartenderInfo';
import BartenderSettings from './BartenderSettings';
import {
  getSettingFromLocalStorage,
  getCheckedItemsFromLocalStorage,
  saveDrinkToLocalStorage,
} from '../../utils/api';

const AIBartender = () => {
  const [drinkDescription, setDrinkDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState('');
  const [bartender, setBartender] = useState('Default');
  const [isLoading, setIsLoading] = useState(false);
  const [useSavedIngredients, setUseSavedIngredients] = useState(
    getSettingFromLocalStorage('useSavedIngredients')
  );
  const [hideBackground, setHideBackground] = useState(
    getSettingFromLocalStorage('hideBackground')
  );
  const [hideBartenderImage, setHideBartenderImage] = useState(
    getSettingFromLocalStorage('hideBartenderImage')
  );
  const [nonAlcoholicMode, setNonAlcoholicMode] = useState(
    getSettingFromLocalStorage('nonAlcoholicMode')
  );
  const [isSaved, setIsSaved] = useState(false);

  const bartenders = Object.keys(BartenderInfo);
  const [initialPrompt, setInitialPrompt] = useState(
    BartenderInfo[bartender].initialPrompt
  );

  useEffect(() => {
    setInitialPrompt(BartenderInfo[bartender].initialPrompt);
    setRecipe('');
  }, [bartender]);

  useEffect(() => {
    updateSettings();
  }, []);

  const updateSettings = () => {
    setUseSavedIngredients(getSettingFromLocalStorage('useSavedIngredients'));
    setHideBackground(getSettingFromLocalStorage('hideBackground'));
    setHideBartenderImage(getSettingFromLocalStorage('hideBartenderImage'));
    setNonAlcoholicMode(getSettingFromLocalStorage('nonAlcoholicMode'));
  };

  const handleSubmit = async (quickStart = false) => {
    setIsLoading(true);

    const ingredientsToUse = useSavedIngredients
      ? getCheckedItemsFromLocalStorage()
      : ingredients;

    const userPrompt = quickStart
      ? `Give me a random cocktail recipe. ${
          nonAlcoholicMode ? 'I would like non-alcoholic drinks.' : ''
        }`
      : `I want a drink that is ${drinkDescription}. I have these ingredients: ${ingredientsToUse}. ${
          nonAlcoholicMode ? 'I would like non-alcoholic drinks.' : ''
        } Thank you!`;

    const data = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: BartenderInfo[bartender].persona },
        { role: 'user', content: userPrompt },
      ],
    };

    const headers = {
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    };

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        data,
        { headers }
      );
      setRecipe(response.data.choices[0].message.content);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`flex h-full w-screen overflow-scroll  ${
        hideBackground ? 'bg-neutral' : ''
      }`}
      style={
        hideBackground
          ? {}
          : {
              backgroundImage: `url(${BartenderInfo[bartender].background})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }
      }
    >
      <dialog id='my_modal_1' className='modal'>
        <div className='modal-box border'>
          <div className='flex justify-between items-center px-4'>
            <h3 className='font-bold text-lg'>Settings</h3>
            <form method='dialog'>
              <button className='btn btn-ghost'>
                <IoClose size={24} />
              </button>
            </form>
          </div>
          <BartenderSettings updateSettings={updateSettings} />
        </div>
      </dialog>
      <div className='drawer lg:drawer-open font-main'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col items-center justify-center'>
          <div
            className={`flex-grow w-full h-full  flex flex-col p-6 ${
              hideBackground ? 'bg-black bg-opacity-75' : ''
            }`}
          >
            <div className='flex items-center'>
              <label
                htmlFor='my-drawer-2'
                className='btn btn-ghost drawer-button lg:hidden mr-4'
              >
                <MdMenuOpen size={24} />
              </label>
              <h2 className='text-xl font-bold text-white bg-black bg-opacity-65 rounded px-1'>
                AI Bartender ({bartender})
              </h2>
            </div>
            <div className='mt-2'>
              <div className='flex items-center'>
                {!hideBartenderImage && (
                  <div className='avatar'>
                    <div className='m-2 lg:w-24 md:w-20 w-16 rounded-full ring ring-primary ring-offset-black ring-offset-2'>
                      <img
                        src={BartenderInfo[bartender].picture}
                        alt='Bartender'
                      />
                    </div>
                  </div>
                )}
                <div className='chat chat-start'>
                  <div className='chat-bubble chat-bubble-accent'>
                    {initialPrompt}
                  </div>
                </div>
              </div>
            </div>
            <textarea
              value={drinkDescription}
              onChange={(e) => setDrinkDescription(e.target.value)}
              cols='30'
              rows='2'
              className='textarea textarea-primary lg:w-1/2 md:w-3/4 sm:w-full mt-5'
              placeholder='Describe a drink (optional):'
            />
            {!useSavedIngredients && (
              <textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                cols='30'
                rows='2'
                className='textarea textarea-primary lg:w-1/2 md:w-3/4 sm:w-full mt-5'
                placeholder='Available ingredients (optional):'
              />
            )}
            <div className='flex lg:flex-row md:flex-row flex-col items-start mt-5'>
              <button
                onClick={() => {
                  handleSubmit(false);
                  setIsSaved(false);
                }}
                className='btn btn-primary mr-4 mb-2'
              >
                Make this drink
              </button>
              <button
                onClick={() => {
                  handleSubmit(true);
                  setIsSaved(false);
                }}
                className='btn btn-primary '
              >
                Random drink / Quick Start
              </button>
            </div>
            {isLoading || recipe ? (
              <div className='mt-5'>
                <div className='flex items-end'>
                  {!hideBartenderImage && (
                    <div className='avatar'>
                      <div className='m-2 lg:w-24 md:w-20 w-16 rounded-full ring ring-primary ring-offset-black ring-offset-2'>
                        <img
                          src={BartenderInfo[bartender].picture}
                          alt='Bartender'
                        />
                      </div>
                    </div>
                  )}
                  <div className='chat chat-start'>
                    <div className='chat-bubble chat-bubble-accent font-tech flex items-center justify-center'>
                      {isLoading ? (
                        <span className='loading loading-dots loading-lg'></span>
                      ) : (
                        recipe
                      )}
                    </div>
                  </div>
                </div>
                {!isLoading && recipe && (
                  <button
                    onClick={() => {
                      saveDrinkToLocalStorage(recipe);
                      setIsSaved(true);
                    }}
                    className='btn btn-success mt-2'
                    disabled={isSaved}
                  >
                    Save Recipe
                  </button>
                )}
              </div>
            ) : null}
          </div>
        </div>
        <div className='drawer-side h-full'>
          <label
            htmlFor='my-drawer-2'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu pl-2 pr-8 w-80 min-h-full bg-base-300 text-base-content'>
            <li className='my-2 text-lg'>
              <Link to='/ingredients'>
                <CiBoxList size={22} />
                Ingredients
              </Link>
            </li>
            <li className='my-2 text-lg'>
              <Link to='/saved-recipes'>
                <CiReceipt size={22} />
                My Recipes
              </Link>
            </li>
            <li className='my-2 text-lg'>
              <Link to='/popular-recipes'>
                <FaRegStar size={22} />
                Popular Drinks
              </Link>
            </li>
            <li className='my-2 text-lg'>
              <button
                onClick={() =>
                  document.getElementById('my_modal_1').showModal()
                }
              >
                <IoSettingsOutline size={22} />
                Settings
              </button>
            </li>
            <li>
              <details className='dropdown my-2 text-lg'>
                <summary>
                  <MdPersonOutline size={22} />
                  Bartenders
                </summary>
                <ul className='p-2 mt-1 bg-base-200 rounded-xl border border-base-content'>
                  {bartenders.map((bartenderKey) => (
                    <li key={bartenderKey}>
                      <div className='w-full h-22 bg-base rounded-xl flex my-1'>
                        <div className='avatar flex-shrink-0'>
                          <div className='m-2 w-24 rounded-full ring ring-primary ring-offset-base-200 ring-offset-2'>
                            <img
                              src={BartenderInfo[bartenderKey].picture}
                              alt={bartenderKey}
                            />
                          </div>
                        </div>
                        <div className='flex-grow flex flex-col justify-center items-start space-y-2 ml-4'>
                          <h3 className='text-base-content'>{bartenderKey}</h3>
                          <button
                            onClick={() => setBartender(bartenderKey)}
                            className='btn btn-primary'
                          >
                            Select
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AIBartender;
