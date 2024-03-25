import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SelectedIngredients = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <ul className='menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box'>
          <li>
            <a>Show All</a>
          </li>
          <li>
            <a>Alcohol</a>
          </li>
          <li>
            <a>Mixers</a>
          </li>
          <li>
            <a>Sweeteners</a>
          </li>
          <li>
            <a>Citrus</a>
          </li>
          <li>
            <a>Bitters</a>
          </li>
          <li>
            <a>Garnishes</a>
          </li>
          <li>
            <a>Other</a>
          </li>
        </ul>
        <label className='input input-bordered flex items-center gap-2'>
          <input type='text' className='grow' placeholder='Search' />
          <FaSearch />
        </label>
      </div>
      <div>SelectedIngredients</div>
    </div>
  );
};

export default SelectedIngredients;
