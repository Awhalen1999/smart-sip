import React, { useState } from 'react';
import axios from 'axios';

const BartenderPage = () => {
  const [drinkDescription, setDrinkDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const bartenderPersona =
    "As an AI bartender, your role is to craft drink recipes based on the user's preferences. If the user lists available ingredients, incorporate them as appropriate. Feel free to omit ingredients that don't fit or may spoil the drink. If no ingredient list is provided, assume common ingredients are available. The user desires a brief description of the drink followed by a recipe breakdown. You're all about the cool vibes, always ready to mix up a drink with effortless style. You bring a laid-back attitude to the bar, but your passion for mixology shines through in every cocktail you create. Feel free to adapt your persona to match the user's vibe.";

  const handleSubmit = async (quickStart = false) => {
    setIsLoading(true);
    const data = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: bartenderPersona },
        {
          role: 'user',
          content: quickStart
            ? 'Give me a random cocktail recipe.'
            : `I want a drink that is ${drinkDescription}. I have these ingredients: ${ingredients}. I will tip for good service. Thank you! `,
        },
      ],
    };

    const headers = {
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    };

    axios
      .post('https://api.openai.com/v1/chat/completions', data, { headers })
      .then((response) => {
        const message = response.data.choices[0].message.content;
        setRecipe(message);
        setIsLoading(false);
      });
  };

  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <div className='flex flex-col justify-start items-start p-2.5 bg-base-100 bg-opacity-75 overflow-auto scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thin font-main'>
          <h2 className='w-full h-10 flex flex-row justify-start items-center text-xl font-bold text-left text-base-content'>
            AI Bartender
          </h2>
          {/* Rest of your page content here */}
          <div className='w-full h-25 flex flex-col justify-start items-start mt-2'>
            <div className='flex items-center'>
              <div className='chat chat-start'>
                <div className='chat-bubble chat-bubble-accent font-tech'>
                  Hey there! I'm your AI bartender. What can I whip up for you
                  today?
                </div>
              </div>
            </div>
          </div>
          <textarea
            value={drinkDescription}
            onChange={(e) => setDrinkDescription(e.target.value)}
            cols='30'
            rows='2'
            className='textarea textarea-primary w-1/2 mt-5'
            placeholder='Describe a drink (optional):'
          />
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            cols='30'
            rows='2'
            className='textarea textarea-primary w-1/2 mt-5'
            placeholder='Available ingredients (optional):'
          />
          <div className='flex items-start'>
            <button
              onClick={() => handleSubmit(false)}
              className='btn btn-primary mt-5 mr-2'
            >
              Make this drink
            </button>
            <button
              onClick={() => handleSubmit(true)}
              className='btn btn-primary mt-5 ml-2'
            >
              Random drink / Quick Start
            </button>
          </div>
          {isLoading || recipe ? (
            <div className='w-full h-25 flex flex-col justify-start items-start mt-5'>
              <div className='flex items-end'>
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
            </div>
          ) : null}
        </div>
        <label
          htmlFor='my-drawer-2'
          className='btn btn-primary drawer-button lg:hidden'
        >
          Open drawer
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-2'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BartenderPage;
