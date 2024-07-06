import React, { useEffect, useState } from 'react'
import UserDetails from '../../components/ReservationDetail/UserDetail';
import HotelDetails from '../../components/ReservationDetail/HotelDeatials';
import { useStripe } from '@stripe/react-stripe-js'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';

const userInfo = {
    name: 'Katarina Bluu',
    userId: '11042000',
    hotelName: 'Novotel Bangkok IMPACT',
    address:
      '94 Popular Road, Banmai Sub District, Pakkred, 11120 Nonthaburi, Thailand',
  }
  
  const HotelInfo = {
    adults: 2,
    roomType: 'Standard Twin Room',
    nights: 1,
    checkInDate: { day: 28, month: 'September' },
    checkOutDate: { day: 29, month: 'September' },
    price: '199',
    tax: '20',
    totalPrice: '219',
    imageSrc:
      'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/252156497.jpg?k=355b900708a7de8ebcbae929334c8875ec2fa6e7f0f8cf3f59897a62f18ed883&o=&hp=1',
  }

export default function CheckOutSuccessPage () {

    const reservationData = useSelector((state) => state.reservation.reservationData)



    return (
<div className=' flex flex-col items-center justify-center p-4 mx-16'>
      {/* <div className='w-full'>
        <TitlePage> Reservation </TitlePage>
      </div> */}
      <div className='max-w-5xl w-full border-[2px] border-fg-grey/50 rounded-2xl flex flex-col items-center p-8 my-24'>
        <div className='max-w-4xl w-full flex justify-start mb-8'>
          <p className='font-medium mt-2 text-xl text-fg-text-black'>
            Reservation ID: 17180820245689
          </p>
        </div>
        <div className='bg-fg-primary-01 bg-opacity-60 shadow-md rounded-tl-2xl rounded-tr-2xl max-w-5xl w-full border-[1px] border-fg-grey/50'>
          <UserDetails
            name={userInfo.name}
            userId={userInfo.userId}
            hotelName={userInfo.hotelName}
            address={userInfo.address}
          />
        </div>
        <div className='bg-fg-primary-03 shadow-md rounded-bl-2xl rounded-br-2xl max-w-5xl w-full border-[1px] border-fg-grey/50'>
          <HotelDetails
            adults={HotelInfo.adults}
            roomType={HotelInfo.roomType}
            nights={HotelInfo.nights}
            checkInDate={HotelInfo.checkInDate}
            checkOutDate={HotelInfo.checkOutDate}
            price={HotelInfo.price}
            tax={HotelInfo.tax}
            totalPrice={HotelInfo.totalPrice}
            imageSrc={HotelInfo.imageSrc}
          />
        </div>
      </div>
    </div>
    )
}