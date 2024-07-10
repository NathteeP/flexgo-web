import React from 'react';
import Avatar from '../Avatar';

const bookingDetails = {
  userId: 11042000,
  userName: 'Katarina Bluu',
  reservationId: '17180820245689',
  accommodations: 'Novotel Bangkok IMPACT',
  guests: '2 adults',
  roomDetails: 'x1 Standard Twin Room',
  nights: 1,
  registrationDate: '30/10/2020',
  arrival: '28/09/2024',
  departure: '29/09/2024',
  status: 'Approved',
  img: 'path',
};

const CardModal = ({reservation}) => {
  return (
    <div className='bg-fg-secondary-01 lg:w-[1000px] h-[300px] flex py-5 px-8 text-fg-text-black'>
      <div className='w-[30%] h-full'>
        <div className='h-full border-[1px] border-fg-text-black/25 rounded-3xl flex flex-col justify-center items-center'>
          <Avatar size='160' />
          <h1 className='mt-2'>{bookingDetails.userName}</h1>
          <small className='font-light'>User ID: {bookingDetails.userId}</small>
          <small className='font-light'>
            Reservation ID: {bookingDetails.reservationId}
          </small>
        </div>
      </div>
      <div className='w-[30%] pt-6 px-6 flex flex-col border-r-[1px] border-fg-text-black/25 '>
        <h1 className='text-xl'>Booking Details</h1>
        <small className='font-light mt-2'>
          {bookingDetails.accommodations}
        </small>
        <small className='font-light'>{bookingDetails.guests}</small>
        <small className='font-light'>{bookingDetails.roomDetails}</small>
        <small className='font-light'>{bookingDetails.nights} Nights</small>
        <small className='mt-4'>
          Registration Date: {bookingDetails.registrationDate}
        </small>
      </div>
      <div className='w-[40%] pt-6 px-6 flex flex-col justify-between'>
        <div className='flex flex-col'>
          <h1 className='text-xl'>Period</h1>
          <small className='mt-4'>Arrival: {bookingDetails.arrival}</small>
          <small className=''>Departure: {bookingDetails.departure}</small>
        </div>
        <div className='flex justify-end gap-2'>
          <button className='border-green-300 bg-green-300 border-[1.5px] w-[100px] h-[35px] rounded-xl  hover:bg-green-200 transition duration-500 hover:scale-105'>
            Approved
          </button>
          <button className='border-red-300 text-red-500 border-[1.5px] w-[100px] h-[35px] rounded-xl hover:bg-red-200 transition duration-500 hover:scale-105'>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
