import React from 'react';
import BookingDetail from '../../components/BookingHistory/BookingDetails';

const BookingHistory = ({ pastBookings }) => (
  <div>
    {pastBookings.map((booking, index) => (
      <BookingDetail key={index} booking={booking} status='Completed' />
    ))}
  </div>
);

export default BookingHistory;
