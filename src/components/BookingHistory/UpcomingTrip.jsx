import React from 'react';
import BookingDetail from '../../components/BookingHistory/BookingDetails';

const UpcomingTrip = ({ upcomingBooking }) => (
    upcomingBooking.length > 0 ? 
    (<div>
    { 
    upcomingBooking.map((booking) => (
      <BookingDetail key={booking.id} booking={booking} />
    ))}
  </div>) :
  <div className='p-4 mb-4 bg-fg-primary-03 shadow-md rounded-xl'>
  <h2 className='text-xl font-semibold'>No upcoming trip</h2>
  </div>
 
);

export default UpcomingTrip;
