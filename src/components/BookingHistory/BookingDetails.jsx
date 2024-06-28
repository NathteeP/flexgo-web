import React from 'react';

const BookingDetail = ({ booking, status }) => (
  <div className='p-4 mb-4 bg-fg-primary-03 shadow-md rounded-xl'>
    <h2 className='text-xl font-semibold'>{booking.hotel}</h2>
    <h2 className='text-lg font-light text-fg-text-black text-opacity-70'>
      {' '}
      Reservation ID :{booking.reservationID}
    </h2>
    <div class='grid grid-cols-3 gap-4 mt-4'>
      <p className='text-fg-text-black font-medium'>{booking.room}</p>
      <p className='text-fg-text-black'>{booking.guests}</p>
      <p className='text-fg-text-black'>{booking.dates}</p>
    </div>
    <div className='flex justify-end mt-6'>
      <p
        className={status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}
      >
        {status}
      </p>
    </div>
  </div>
);

export default BookingDetail;
