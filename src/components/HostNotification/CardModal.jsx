import React from 'react';
import Avatar from '../Avatar';
import dayjs from 'dayjs';
import { useState } from 'react';
import reservationApi from '../../api/reservation';

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

export const ReservationStatus = {
  PENDING: "PENDING",
  CONFIRMED : "CONFIRMED",
  CANCELED : "CANCELED",
  CHECKIN : "CHECKIN",
}

const CardModal = ({reservation}) => {
  const {
    customerName,
    userId,
    id,
    accomName,
    customerAmount,
    roomType,
    roomName,
    checkInDate,
    checkOutDate,
    bookingDays,
    bookingDate,
    userPhoto,
    status,
  } = reservation

  const [reservStatus, setReservStatus] = useState(status)

  const GreenButton = ({children, onClick}) => {
    return (
      <button className='border-green-300 bg-green-300 border-[1.5px] w-[100px] h-[35px] rounded-xl  hover:bg-green-200 transition duration-500 hover:scale-105'
      onClick={onClick}>
    {children}
  </button>)
  }

  const RedButton = ({children, onClick}) => {
    return (
      <button className='border-red-300 text-red-500 border-[1.5px] w-[100px] h-[35px] rounded-xl hover:bg-red-200 transition duration-500 hover:scale-105'
      onClick={onClick}>
        {children}
      </button>
    )
  }

  const DisabledButton = ({children}) => {
    return (
      <button className='border-gray-600 bg-gray-300 border-[1.5px] w-[100px] h-[35px] rounded-xl disabled cursor-auto'>
      {children}
    </button>
    )
  }

  const RedDisabledButton = ({children}) => {
    return (
      <button className='border-red-300 text-black border-[1.5px] w-[100px] h-[35px] rounded-xl disabled cursor-auto'>
      {children}
    </button>
    )
  }

  const handleClickHostStatusButton = async (reservId, statusToUpdate) => {
    const updateBody = {status:statusToUpdate}
    await reservationApi.editReservation(reservId, updateBody)
    setReservStatus(statusToUpdate)
  }

  const handleHostModalAction = (reservStatus, onClick, id) => {

    switch (reservStatus) {
      
      case "PENDING":
        return (
          <>
            <GreenButton onClick={()=>onClick(id,reservStatus.CONFIRMED)}>Approve</GreenButton>
            <RedButton onClick={()=>onClick(id,reservStatus.CANCELED)}>Reject</RedButton>
          </>
        );
      case "CONFIRMED":
        return <GreenButton onClick={()=>onClick(id,reservStatus.CHECKIN)}>Check-in</GreenButton>;
      case "CHECKIN":
        return <DisabledButton>Checked-in</DisabledButton>;
      case "CANCELED":
        return <RedDisabledButton>Canceled</RedDisabledButton>;
      default:
        return null; // or any default action you want to return
    }
  };

  return (
    <div className='bg-fg-secondary-01 lg:w-[1000px] h-[300px] flex py-5 px-8 text-fg-text-black'>
      <div className='w-[30%] h-full'>
        <div className='h-full border-[1px] border-fg-text-black/25 rounded-3xl flex flex-col justify-center items-center'>
          <Avatar src={userPhoto?.imagePath} size='160' />
          <h1 className='mt-2'>{customerName}</h1>
          <small className='font-light'>User ID: {userId || "Not Registered"}</small>
          <small className='font-light'>
            Reservation ID: {id}
          </small>
        </div>
      </div>
      <div className='w-[30%] pt-6 px-6 flex flex-col border-r-[1px] border-fg-text-black/25 '>
        <h1 className='text-xl'>Booking Details</h1>
        <small className='font-light mt-2'>
          {accomName}
        </small>
        <small className='font-light'>{customerAmount} Guests</small>
        <small className='font-light'>{roomType}</small>
        <small className='font-light'>{roomName}</small>
        <small className='font-light'>{bookingDays} Nights</small>
        <small className='mt-4'>
          Booking Date: {dayjs(bookingDate).format('DD/MM/YYYY')}
        </small>
      </div>
      <div className='w-[40%] pt-6 px-6 flex flex-col justify-between'>
        <div className='flex flex-col'>
          <h1 className='text-xl'>Period</h1>
          <small className='mt-4'>Arrival: {checkInDate}</small>
          <small className=''>Departure: {checkOutDate}</small>
        </div>
        <div className='flex justify-end gap-2'>
          {handleHostModalAction(reservStatus, handleClickHostStatusButton, id)}
        </div>
      </div>
    </div>
  );
};

export default CardModal;
