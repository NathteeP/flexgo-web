import React from 'react';
import { Breadcrumbs, Link } from '@mui/material';
import UpcomingTrip from '../../components/BookingHistory/UpcomingTrip';
import BookingHistory from '../../components/BookingHistory/BookingHistory';
import ProfileBox from '../../components/ProfileBox';
import TitlePage from '../../layouts/TitlePage';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAuthUser } from '../../store/slices/user-slice';

const user = {
  profilePicture:
    'https://https://i.pinimg.com/originals/de/c5/1c/dec51c80d9f0bf81efc9623505e01ba4.jpg.com/profile.jpg',
  name: 'Katarina Bluu',
  id: '11042000',
  registrationDate: '11/04/2020',

  upcomingBooking: {
    hotel: 'Novotel Bangkok IMPACT',
    reservationID: '17180820245689',
    room: 'x1 Standard Twin Room',
    guests: '2 adults',
    dates: '28/09/2024 - 29/09/2024',
  },
  pastBookings: [
    {
      hotel: 'Ascott Embassy Sathorn Bangkok',
      reservationID: '17180820245689',
      room: 'x1 Standard Twin Room',
      guests: '2 adults',
      dates: '29/07/2023 - 30/07/2023',
    },
    {
      hotel: 'Bangkok Marriott Hotel',
      reservationID: '17180820245689',
      room: 'x1 Standard Twin Room',
      guests: '2 adults',
      dates: '29/07/2023 - 30/07/2023',
    },
    {
      hotel: 'Cholchan Pattaya Beach Resort',
      reservationID: '17180820245689',
      room: 'x1 Standard Twin Room',
      guests: '2 adults',
      dates: '29/07/2023 - 30/07/2023',
    },
  ],
};

export const upcomingBooking = (allReservationData) => {
  if (!allReservationData) return []
  const upcomingTrip = []
  allReservationData.forEach(el => {
    if (dayjs().isBefore(el.checkOutDate)) {
      upcomingTrip.push(el)
    }
  })
  return upcomingTrip

}

export const pastBooking = (allReservationData) => {
  if (!allReservationData) return []
  const pastTrip = []
  allReservationData.forEach(el => {
    if(dayjs().isAfter(el.checkOutDate)){
      pastTrip.push(el)
    }
  })
  return pastTrip
}

const BookingHistoryPage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAuthUser())
  },[])
    
  const authUser = useSelector((state) => state.user.authUser)
  console.log(authUser)
  
  return (
  <div className='p-4'>
    <Breadcrumbs aria-label='breadcrumb'>
      <Link color='inherit' href='/' className='no-underline'>
        Home
      </Link>
      <Link color='inherit' href='/account' className='no-underline'>
        Account
      </Link>
      <span>Booking History</span>
    </Breadcrumbs>

    <div className='flex flex-col justify-center gap-4 mt-8 mx-16 '>
      <TitlePage> Booking History</TitlePage>
      {/* left part */}
      <div className='flex justify-center gap-4'>
        <div>
          <ProfileBox
            src={authUser?.profileImage.imagePath}
          >
            <div className='px-10 py-4'>
              <div className='flex flex-col items-center'>
                <div className='text-3xl'>{authUser?.fullName}</div>
                <div className='font-medium'>User ID: {authUser?.id}</div>
                <br />
                <div className='font-light'>
                  Register Date: {dayjs(authUser?.createdAt).format('DD/MM/YYYY')}
                </div>
                <br />
                <div className='font-light'>
                  {authUser?.description}
                </div>
              </div>
            </div>
          </ProfileBox>
        </div>

        {/* right part */}
        <div className='w-full'>
          <div className='border-[2px] border-fg-grey/50 rounded-[40px] p-4'>
            <div className='bg-fg-primary-01 rounded-2xl p-3 mb-4 w-full'>
              <h2 className='text-xl font-medium text-fg-white ml-2'>
                Upcoming Trip
              </h2>
            </div>
            <UpcomingTrip upcomingBooking={upcomingBooking(authUser?.bookingHistory)} />

            <div className='bg-fg-primary-01 rounded-2xl p-3 mb-4 w-full'>
              <h2 className='text-xl font-medium text-fg-white ml-2'>
                Booking History
              </h2>
            </div>
            <BookingHistory pastBookings={pastBooking(authUser?.bookingHistory)} />
          </div>
        </div>
      </div>
    </div>
  </div>
)}

export default BookingHistoryPage;
