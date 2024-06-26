import React, { useState } from 'react';

const GuestDropdown = ({ updateGuests }) => {
  const [guests, setGuests] = useState({ adults: 1, children: 0 });

  const handleChange = (type, operation) => {
    setGuests((prevGuests) => {
      const newGuests = { ...prevGuests };
      if (type === 'adults') {
        newGuests.adults =
          operation === 'increment'
            ? newGuests.adults + 1
            : Math.max(1, newGuests.adults - 1);
      } else if (type === 'children') {
        newGuests.children =
          operation === 'increment'
            ? newGuests.children + 1
            : Math.max(0, newGuests.children - 1);
      }
      updateGuests(newGuests); // อัปเดต parent component
      return newGuests;
    });
  };

  return (
    <div className='absolute top-full mt-2 w-[200px] p-2 bg-white border rounded shadow-lg z-50'>
      <div className='flex justify-between items-center mb-2'>
        <span>Adults</span>
        <div className='flex items-center'>
          <button
            type='button'
            onClick={() => handleChange('adults', 'decrement')}
          >
            -
          </button>
          <span className='mx-2'>{guests.adults}</span>
          <button
            type='button'
            onClick={() => handleChange('adults', 'increment')}
          >
            +
          </button>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <span>Children</span>
        <div className='flex items-center'>
          <button
            type='button'
            onClick={() => handleChange('children', 'decrement')}
          >
            -
          </button>
          <span className='mx-2'>{guests.children}</span>
          <button
            type='button'
            onClick={() => handleChange('children', 'increment')}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestDropdown;
