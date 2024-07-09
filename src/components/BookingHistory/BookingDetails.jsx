import dayjs from 'dayjs';
import React from 'react';

const BookingDetail = ({booking}) => {
  const checkInDate = dayjs(booking.checkInDate).format('DD/MM/YYYY')
  const checkOutDate = dayjs(booking.checkOutDate).format('DD/MM/YYYY')

  return (
  <div className='p-4 mb-4 bg-fg-primary-03 shadow-md rounded-xl'>
    <h2 className='text-xl font-semibold'>{booking.room.accom.name}</h2>
    <h2 className='text-lg font-light text-fg-text-black text-opacity-70'>
      {' '}
      Reservation ID :{booking.id}
    </h2>
    <div class='grid grid-cols-3 gap-4 mt-4'>
      <p className='text-fg-text-black font-medium'>{booking.room.roomType}</p>
      <p className='text-fg-text-black'>{booking.customerAmount} guests</p>
      <p className='text-fg-text-black'>{checkInDate} - {checkOutDate}</p>
    </div>
    <div className='flex justify-end mt-6'>
      <p
        className={booking.status === "PENDING" ? 'text-yellow-500' : 'text-green-500'}
      >
        {booking.status}
      </p>
    </div>
  </div>
)}

export default BookingDetail;
