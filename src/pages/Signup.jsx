import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { registerUser } from '../utils/api';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null); //add later
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await registerUser(username, email, password);
      navigate('/'); // Redirect to the home page or login page
    } catch (error) {
      setError('Failed to create an account');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex items-center h-full p-6 bg-base-100 justify-center'>
      <div className='relative flex flex-col overflow-hidden rounded-lg shadow-lg md:flex-row md:flex-1 lg:max-w-screen-md'>
        <Link
          to='/'
          className='absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700'
        >
          <IoClose />
        </Link>
        <div className='flex flex-col overflow-hidden rounded-lg shadow-lg md:flex-row md:flex-1 lg:max-w-screen-md'>
          <div className='p-4 py-6 text-primary-content bg-primary md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly'>
            <div className='my-3 text-4xl font-bold tracking-wider text-center'>
              <h2>GameOn Tap</h2>
            </div>
            <p className='mt-6 font-normal text-center md:mt-0'>
              Create an account to access all the features of GameOn Tap.
            </p>
            <p className='flex flex-col items-center justify-center mt-8 text-center'>
              <span>Already have an account?</span>
              <Link to='/login' className='underline font-bold'>
                Log In
              </Link>
            </p>
          </div>
          <div className='p-5 bg-white md:flex-1'>
            <h3 className='my-4 text-2xl font-semibold text-black'>Sign Up</h3>
            <form className='flex flex-col space-y-5' onSubmit={handleSignup}>
              <div className='flex flex-col space-y-1'>
                <label
                  htmlFor='username'
                  className='text-sm font-semibold text-gray-600'
                >
                  Username
                </label>
                <input
                  type='text'
                  id='username'
                  className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-primary text-black'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className='flex flex-col space-y-1'>
                <label
                  htmlFor='email'
                  className='text-sm font-semibold text-gray-600'
                >
                  Email address
                </label>
                <input
                  type='email'
                  id='email'
                  className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-primary text-black'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='flex flex-col space-y-1'>
                <label
                  htmlFor='password'
                  className='text-sm font-semibold text-gray-600'
                >
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  className='px-3 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-primary text-black'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className='flex flex-col space-y-1'>
                <label
                  htmlFor='confirmPassword'
                  className='text-sm font-semibold text-gray-600'
                >
                  Confirm Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='confirmPassword'
                  className='px-3 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-primary text-black'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className='flex items-center mt-2'>
                <label className='label cursor-pointer'>
                  <span className='label-text text-gray-600'>
                    Show Password
                  </span>
                  <input
                    type='checkbox'
                    id='showPassword'
                    checked={showPassword}
                    onChange={togglePasswordVisibility}
                    className='ml-2 checkbox checkbox-primary checkbox-sm'
                  />
                </label>
              </div>
              {error && <p className='text-error'>{error}</p>}
              <div>
                <button
                  type='submit'
                  className='w-full px-4 py-2 text-lg font-semibold text-primary-content bg-primary rounded'
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
