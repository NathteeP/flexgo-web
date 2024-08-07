import React, { useEffect, useState } from 'react';
import { Breadcrumbs, Link, Skeleton } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../../config/stripe';
import CheckOutForm from '../../components/CheckOutPage/CheckOutForm';
import BookingSummary from '../../components/CheckOutPage/BookingSummary';
import {
  fetchClientSecret,
  setTransactionData,
} from '../../store/slices/payment-slice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomAndAccomByRoomId } from '../../store/slices/room-accom-slice';
import dayjs from 'dayjs';
import {
  fetchFeeData,
  setReservationData,
} from '../../store/slices/reservation-slice';

const CheckOutPage = () => {
  const dispatch = useDispatch();
  const clientSecret = useSelector((state) => state.payment.clientSecret);
  const isLoading = useSelector((state) => state.payment.isLoading);

  const reservationData = useSelector(
    (state) => state.reservation.reservationData
  );
  const { checkInDate, checkOutDate, roomId, customerAmount } = reservationData;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchRoomAndAccomByRoomId(roomId));
    dispatch(fetchFeeData(import.meta.env.VITE_FEE_ID));

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch, roomId]);

  const roomAccom = useSelector((state) => state.room.roomData);
  const bookingDays = dayjs(checkOutDate).diff(checkInDate, 'days');
  const { clientFee, hostFee } = useSelector(
    (state) => state.reservation.feeData
  );
  const { netPrice } = useSelector((state) => state.payment.transactionData);
  const pricePerDay = roomAccom.price;
  const VAT = 7;

  const roomPrice = pricePerDay * bookingDays;
  const serviceFee = roomPrice * clientFee * (1 + VAT / 100);
  const totalPayment = (roomPrice + serviceFee).toFixed(2);

  useEffect(() => {
    dispatch(
      setTransactionData({
        netPrice: +totalPayment,
        serviceFee: +serviceFee.toFixed(2),
      })
    );
  }, [dispatch, totalPayment]);

  useEffect(() => {
    dispatch(
      setReservationData({
        ...reservationData,
        bookingDays,
      })
    );
  }, [dispatch, bookingDays]);

  const BreadcrumbNavigation = () => (
    <Breadcrumbs aria-label='breadcrumb'>
      <Link underline='hover' color='inherit' href='/'>
        Home
      </Link>
      <Link
        underline='hover'
        color='inherit'
        href={`/accommodationDetail/${roomAccom.accomId}`}
      >
        {roomAccom.accom?.name}
      </Link>
      <Link underline='hover' color='inherit' href='#' aria-current='page'>
        Check out
      </Link>
    </Breadcrumbs>
  );

  const dataToStripe = {
    amount: +(netPrice * 100).toFixed(),
    description: 'testing',
  };

  useEffect(() => {
    if (!isNaN(netPrice)) {
      dispatch(fetchClientSecret(dataToStripe));
    }
  }, [dispatch, netPrice]);

  const stripeFormAppearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance: stripeFormAppearance,
  };

  return (
    <div className='p-8 min-h-screen md:mx-16 transition-all duration-500'>
      <BreadcrumbNavigation />
      <div className='flex flex-col lg:flex-row gap-8 mt-8'>
        <div className='lg:w-1/2 order-2 lg:order-1'>
          {loading ? (
            <div className='p-8 border-gray-900 shadow rounded'>
              <Skeleton
                variant='text'
                width={250}
                height={30}
                className='mb-4'
              />
              <Skeleton
                variant='rectangular'
                width='100%'
                height={60}
                className='mb-4'
              />
              <Skeleton
                variant='rectangular'
                width='100%'
                height={60}
                className='mb-4'
              />
              <Skeleton
                variant='rectangular'
                width='100%'
                height={60}
                className='mb-4'
              />
              <Skeleton
                variant='rectangular'
                width='100%'
                height={60}
                className='mb-4'
              />
              <Skeleton
                variant='rectangular'
                width='100%'
                height={60}
                className='mb-4'
              />
              <Skeleton
                variant='rectangular'
                width='100%'
                height={40}
                className='mb-4'
              />
              <Skeleton
                variant='rectangular'
                width='100%'
                height={200}
                className='mb-4'
              />
              <Skeleton
                variant='rectangular'
                width='100%'
                height={40}
                className='mb-4'
              />
              <Skeleton
                variant='rectangular'
                width='100%'
                height={60}
                className='mb-4'
              />
              <Skeleton
                variant='rectangular'
                width='100%'
                height={150}
                className='mb-4'
              />
              <Skeleton
                variant='rectangular'
                width='100%'
                height={40}
                className='mb-4'
              />
            </div>
          ) : (
            clientSecret && (
              <Elements stripe={stripePromise} options={options}>
                <CheckOutForm clientSecret={clientSecret} />
              </Elements>
            )
          )}
        </div>
        <div className='lg:w-1/2 order-1 lg:order-2'>
          <BookingSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
