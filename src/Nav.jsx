import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

const Nav = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('theme') || 'myDark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const handleThemeChange = (event) => {
    const newTheme = event.target.checked ? 'myDark' : 'myLight';
    setCurrentTheme(newTheme);
  };

  return (
    <div className='navbar  font-main font-medium'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to='/bartender'>Bartender</Link>
            </li>
            <li>
              <Link to='/ingredients'>Ingredients</Link>
            </li>
            <li>
              <Link to='/saved-recipes'>Saved Recipes</Link>
            </li>
            <li>
              <Link to='/popular-recipes'>Popular Recipes</Link>
            </li>
          </ul>
        </div>
        <Link to='/' className='btn btn-ghost text-2xl font-header'>
          SmartSip
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li className='mx-2'>
            <Link to='/bartender'>Bartender</Link>
          </li>
          <li className='mx-2'>
            <Link to='/ingredients'>Ingredients</Link>
          </li>
          <li className='mx-2'>
            <Link to='/saved-recipes'>Saved Recipes</Link>
          </li>
          <li className='mx-2'>
            <Link to='/popular-recipes'>Popular Recipes</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <label className='swap swap-rotate mr-4'>
          <input
            type='checkbox'
            className='theme-controller mr-3'
            onChange={handleThemeChange}
            checked={currentTheme === 'myDark'}
          />

          {currentTheme === 'myDark' ? (
            <FaRegSun className='swap-on fill-current w-7 h-7' />
          ) : (
            <FaRegMoon className='swap-off fill-current w-7 h-7' />
          )}
        </label>
        <a className='btn mr-2'>Login</a>
      </div>
    </div>
  );
};

export default Nav;
