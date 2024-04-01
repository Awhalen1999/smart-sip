import React, { useEffect, useState } from 'react';
import {
  getDrinksFromLocalStorage,
  deleteDrinkFromLocalStorage,
  toggleFavoriteDrink,
} from '../../utils/api';
import { TiDelete } from 'react-icons/ti';
import { FaRegStar, FaStar, FaChevronDown } from 'react-icons/fa';

const SavedRecipes = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const savedDrinks = getDrinksFromLocalStorage();
    setDrinks(savedDrinks.sort((a, b) => b.favorite - a.favorite));
  }, []);

  const handleDeleteDrink = (drinkTitle) => {
    deleteDrinkFromLocalStorage(drinkTitle);
    setDrinks(drinks.filter((drink) => drink.title !== drinkTitle));
  };

  const handleToggleFavorite = (drinkTitle) => {
    toggleFavoriteDrink(drinkTitle);
    setDrinks(
      drinks
        .map((drink) => {
          if (drink.title === drinkTitle) {
            return { ...drink, favorite: !drink.favorite };
          }
          return drink;
        })
        .sort((a, b) => b.favorite - a.favorite)
    );
  };

  return (
    <div className='p-4 space-y-4'>
      {drinks.map((drink, index) => (
        <details key={index} className='collapse bg-neutral rounded-lg p-4'>
          <summary className='collapse-title text-xl font-medium'>
            <div className='flex justify-between items-center w-full'>
              <div className='flex items-center'>
                <button
                  onClick={() => handleToggleFavorite(drink.title)}
                  className='mr-3 text-warning'
                >
                  {drink.favorite ? (
                    <FaStar size={24} />
                  ) : (
                    <FaRegStar size={24} />
                  )}
                </button>
                <div className='flex items-center'>
                  <span className='mr-4'>{drink.title}</span>{' '}
                  <FaChevronDown size={18} />
                </div>
              </div>
              <button
                onClick={() => handleDeleteDrink(drink.title)}
                className='btn btn-error rounded-lg'
              >
                <TiDelete size={22} />
              </button>
            </div>
          </summary>
          <div className='divider'></div>
          <div className='collapse-content'>
            <p className='mt-2 text-lg font-semibold'>Description:</p>
            <p className='mt-1'>{drink.description}</p>
            <p className='mt-4 text-lg font-semibold'>Recipe:</p>
            <p className='mt-1'>{drink.recipe}</p>
          </div>
        </details>
      ))}
    </div>
  );
};

export default SavedRecipes;
