import React, { useEffect, useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import reservationApi from '../../api/reservation';
import { useSelector } from 'react-redux';
import {
  PaymentSuccess,
  PaymentFailed,
} from '../../components/CheckOutPage/CheckoutProcessing';
import CheckoutSpinner from './CheckoutSpinner';

export default function CheckOutProcessingPage() {
  const stripe = useStripe();
  const location = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const reservationId = useSelector((state) => state.reservation.reservationId);
  const transactionId = useSelector((state) => state.reservation.transactionId);
  console.log(transactionId);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    const retrievePaymentIntent = async () => {
      try {
        const { paymentIntent } =
          await stripe.retrievePaymentIntent(clientSecret);

        switch (paymentIntent.status) {
          case 'succeeded':
            setMessage('Your booking payment has been successfully done');
            const updatePayload = { transactionId: +transactionId };
            await reservationApi.confirmPayment(updatePayload);
            setStatus('success');
            setTimeout(
              () => navigate(`/checkout/success/${reservationId}`),
              3000
            );
            break;
          case 'processing':
            setMessage('Your payment is processing.');
            setStatus('failed');
            break;
          case 'requires_payment_method':
            setMessage('Your payment was not successful, please try again.');
            setStatus('failed');
            break;
          default:
            setMessage('Something went wrong.');
            setStatus('failed');
            break;
        }
      } catch (error) {
        console.error('Error retrieving payment intent:', error);
        setMessage('Sorry, something went wrong.');
        setStatus('failed');
      }
    };

    retrievePaymentIntent();
  }, [stripe, location, transactionId, reservationId, navigate]);

  if (status === 'success') {
    return <PaymentSuccess reservationId={reservationId} message={message} />;
  }

  if (status === 'failed') {
    return <PaymentFailed reservationId={reservationId} message={message} />;
  }

  return (
    <div>
      <CheckoutSpinner />
    </div>
  );
}
