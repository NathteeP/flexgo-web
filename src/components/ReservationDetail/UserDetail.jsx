import React from 'react';

const UserDetails = ({ name, userId, hotelName, address }) => {
  return (
    <div className='flex justify-between p-6  border-gray-200'>
      <div className='flex flex-col'>
        <h2 className='text-xl font-bold text-gray-800'>{name}</h2>
        <p className='text-gray-500'>User ID: {userId}</p>
      </div>
      <div className='flex flex-col'>
        <h3 className='text-lg font-bold text-gray-800'>{hotelName}</h3>
        <p className='text-gray-500'>{address}</p>
      </div>
    </div>
  );
};

export default UserDetails;
