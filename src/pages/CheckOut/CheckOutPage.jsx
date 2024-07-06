import React, { useEffect } from 'react';
import {
  Breadcrumbs,
  Link,
} from '@mui/material';

import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../../config/stripe';
import CheckOutForm from '../../components/CheckOutPage/CheckOutForm';
import BookingSummary from '../../components/CheckOutPage/BookingSummary';
import { fetchClientSecret, setTransactionData } from '../../store/slices/payment-slice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomAndAccomByRoomId } from '../../store/slices/room-accom-slice';
import dayjs from 'dayjs';
import { fetchFeeData, setReservationData } from '../../store/slices/reservation-slice';

const CheckOutPage = () => {

const dispatch = useDispatch();
const clientSecret = useSelector((state) => state.payment.clientSecret);
const isLoading = useSelector((state) => state.payment.isLoading);

// data from click booking button >>
const reservationData = useSelector((state) => state.reservation.reservationData)
const {checkInDate, checkOutDate, roomId, customerAmount} = reservationData
useEffect(() => {
//fetching room + accom data 
  dispatch(fetchRoomAndAccomByRoomId(roomId))
//fetching fee data
  dispatch(fetchFeeData(import.meta.env.VITE_FEE_ID))
}, [])
const roomAccom = useSelector((state) => state.room.roomData)

//calculating price
const bookingDays = dayjs(checkOutDate).diff(checkInDate, 'days')
const {clientFee, hostFee} = useSelector((state) => state.reservation.feeData)
const pricePerDay = roomAccom.price
const VAT = 7

const roomPrice = pricePerDay * bookingDays
const serviceFee = roomPrice * clientFee * (1+(VAT/100))
const totalPayment = (roomPrice + serviceFee).toFixed(2)

useEffect(() => {
dispatch(setTransactionData({
  netPrice: +totalPayment,
  serviceFee: +serviceFee.toFixed(2)
}))
},[totalPayment])

useEffect(() => {
  dispatch(setReservationData({
    ...reservationData, bookingDays
  }))
},[bookingDays])


  const BreadcrumbNavigation = () => (
    <Breadcrumbs aria-label='breadcrumb'>
      <Link underline='hover' color='inherit' href='/'>
        Home
      </Link>
      <Link underline='hover' color='inherit' href={`/accommodationDetail/${roomAccom.accomId}`}>
        {roomAccom.accom?.name}
      </Link>
      <Link underline='hover' color='inherit' href='#' aria-current='page'>
        Check out
      </Link>
    </Breadcrumbs>
  );

  const dataToStripe = {
    amount: totalPayment * 100 ,
    //stripe are unable to send mail to customer in test account
    // receipt_email: 'client@mail.com',
    description: "testing"
  }
  
  useEffect(() => {
    
    if (!isNaN(totalPayment)) {
      dispatch(fetchClientSecret(dataToStripe));
    }
}, [totalPayment])

  const stripeFormAppearance = {
    theme: 'stripe',
    // variables: {
    //   colorPrimary: '#0570de',
    //   colorBackground: '#ffffff',
    //   colorText: '#30313d',
    //   colorDanger: '#df1b41',
    //   fontFamily: 'Ideal Sans, system-ui, sans-serif',
    //   spacingUnit: '2px',
    //   borderRadius: '4px',
    // },
    // rules: {
    //   '.Label': {
    //     color: '#30313d',
    //   },
    // },
  }
  
  const options = {
    clientSecret,
    appearance: stripeFormAppearance
  }

  return (
    <div className='p-8  min-h-screen mx-16'>
      <BreadcrumbNavigation />
      <div className='grid grid-cols-2 gap-8 mt-8'>
      {/* {isLoading && null} */}
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckOutForm clientSecret={clientSecret} />
        </Elements>
      )}
        <div>
          <BookingSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
