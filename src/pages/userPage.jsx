import React from 'react';
import { useAuth } from '../utils/authProvider';

const UserPage = () => {
  const { logout, user } = useAuth();

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl border border-primary'>
      <h2 className='text-3xl font-bold text-center mb-6 text-black'>
        User Profile
      </h2>

      <div className='flex flex-col space-y-4'>
        <div className='p-4  rounded-md'>
          <p className='font-semibold text-gray-700'>User ID:</p>
          <p className='text-black'>{user.id}</p>
        </div>
        <div className='p-4  rounded-md'>
          <p className='font-semibold text-gray-700'>Username:</p>
          <p className='text-black'>{user.username}</p>
        </div>
        <div className='p-4  rounded-md'>
          <p className='font-semibold text-gray-700'>Email:</p>
          <p className='text-black'>{user.email}</p>
        </div>
        <div className='p-4 rounded-md'>
          <p className='font-semibold text-gray-700'>Account Created:</p>
          <p className='text-black'>{formatDate(user.created_at)}</p>
        </div>

        <button
          onClick={logout}
          className='w-full py-2 text-lg font-semibold text-white bg-red-500 hover:bg-red-600 rounded-md transition duration-200'
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserPage;
