import React from 'react';
import { Breadcrumbs, Link } from '@mui/material';
import UpcomingTrip from '../../components/BookingHistory/UpcomingTrip';
import BookingHistory from '../../components/BookingHistory/BookingHistory';
import ProfileBox from '../../components/ProfileBox';
import TitlePage from '../../layouts/TitlePage';

const user = {
  profilePicture:
    'https://https://i.pinimg.com/originals/de/c5/1c/dec51c80d9f0bf81efc9623505e01ba4.jpg.com/profile.jpg',
  name: 'Katarina Bluu',
  id: '11042000',
  registrationDate: '11/04/2020',

  upcomingBooking: {
    hotel: 'Novotel Bangkok IMPACT',
    room: 'x1 Standard Twin Room',
    guests: '2 adults',
    dates: '28/09/2024 - 29/09/2024',
  },
  pastBookings: [
    {
      hotel: 'Ascott Embassy Sathorn Bangkok',
      room: 'x1 Standard Twin Room',
      guests: '2 adults',
      dates: '29/07/2023 - 30/07/2023',
    },
    {
      hotel: 'Bangkok Marriott Hotel',
      room: 'x1 Standard Twin Room',
      guests: '2 adults',
      dates: '29/07/2023 - 30/07/2023',
    },
    {
      hotel: 'Cholchan Pattaya Beach Resort',
      room: 'x1 Standard Twin Room',
      guests: '2 adults',
      dates: '29/07/2023 - 30/07/2023',
    },
  ],
};

const BookingHistoryPage = () => (
  <div className='p-4'>
    <Breadcrumbs aria-label='breadcrumb'>
      <Link color='inherit' href='/'>
        Home
      </Link>
      <Link color='inherit' href='/account'>
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
            src={
              'https://i.pinimg.com/originals/54/c6/c9/54c6c9b6a81f76e3d2dcbbb2d22064a0.jpg'
            }
          >
            <div className='px-10 py-4'>
              <div className='flex flex-col items-center'>
                <div className='text-3xl'>{user.name}</div>
                <div className='font-medium'>User ID: {user.id}</div>
                <br />
                <div className='font-light'>
                  Register Date: {user.registrationDate}
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
            <UpcomingTrip upcomingBooking={user.upcomingBooking} />

            <div className='bg-fg-primary-01 rounded-2xl p-3 mb-4 w-full'>
              <h2 className='text-xl font-medium text-fg-white ml-2'>
                Booking History
              </h2>
            </div>
            <BookingHistory pastBookings={user.pastBookings} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BookingHistoryPage;
