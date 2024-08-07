import { Outlet } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from '../config/stripe'

const CheckOutContainer = () => {
  return (
    <>
      <Elements stripe={stripePromise}>
      <Outlet />
      </Elements>
    </>
  );
};

export default CheckOutContainer
