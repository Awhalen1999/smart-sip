import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/authProvider";
import { FaUser } from "react-icons/fa";

const Nav = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "myDark");
  const { user, loading, logout } = useAuth();

  const handleThemeChange = (event) => {
    const newTheme = event.target.checked ? "myLight" : "myDark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (user) {
    }
  }, [user]);

  return (
    <div className="navbar fixed-nav font-main font-medium border-b-2 border-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="btn btn-ghost">
                Home
              </Link>
            </li>
            <li>
              <Link to="/bartender" className="btn btn-ghost">
                Bartender
              </Link>
            </li>
            <li>
              <Link to="/ingredients" className="btn btn-ghost">
                Ingredients
              </Link>
            </li>
            <li>
              <Link to="/saved-recipes" className="btn btn-ghost">
                Saved Recipes
              </Link>
            </li>
            <li>
              <Link to="/popular-recipes" className="btn btn-ghost">
                Popular Recipes
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl font-header">
          SmartSip
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="mx-1">
            <Link to="/" className="btn btn-ghost">
              Home
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/bartender" className="btn btn-ghost">
              Bartender
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/ingredients" className="btn btn-ghost">
              Ingredients
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/saved-recipes" className="btn btn-ghost">
              Saved Recipes
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/popular-recipes" className="btn btn-ghost">
              Popular Recipes
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            className="theme-controller"
            value={theme}
            onChange={handleThemeChange}
            checked={theme === "myLight"}
          />
          <svg
            className="swap-off fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-on fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        {/* Handle loading and authenticated state */}
        {loading ? (
          <div>
            <span className="loading loading-ring loading-md"></span>
          </div>
        ) : user ? (
          <div className="dropdown dropdown-end ml-4 mr-2">
            <div tabIndex={0} role="button" className="btn m-1 btn-circle">
              <FaUser className="text-2xl cursor-pointer" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow border border-neutral"
            >
              <li>
                <button
                  onClick={logout}
                  className="w-full py-2 text-md  text-white bg-red-500 hover:bg-red-600 rounded-md transition duration-200"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-outline mr-2 ml-4">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
