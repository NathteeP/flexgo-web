import React from 'react';
import BookingDetail from '../../components/BookingHistory/BookingDetails';

const UpcomingTrip = ({ upcomingBooking }) => (
  <div>
    <BookingDetail booking={upcomingBooking} status='Pending' />
  </div>
);

export default UpcomingTrip;
