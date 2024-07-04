import React, { useEffect } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Breadcrumbs,
  Link,
  TextField,
  MenuItem,
} from '@mui/material';

import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../../config/stripe';
import axios from '../../config/axios'
import CheckOutForm from '../../components/CheckOutPage/CheckOutForm';
import BookingSummary from '../../components/CheckOutPage/BookingSummary';



const BreadcrumbNavigation = () => (
  <Breadcrumbs aria-label='breadcrumb'>
    <Link underline='hover' color='inherit' href='/'>
      Home
    </Link>
    <Link underline='hover' color='inherit' href='/searchList'>
      Assets Search
    </Link>
    <Link underline='hover' color='inherit' href='#'>
      CHAMPZA MOTEL
    </Link>
    <Link underline='hover' color='inherit' href='#' aria-current='page'>
      Check out
    </Link>
  </Breadcrumbs>
);



const CheckOutPage = () => {

  const [clientSecret, setClientSecret] = useState('')
  const paymentAmount = 25820.84 * 100 //หน่วยเป็นสตางค์
  
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await axios.post('reservation/create-payment-intent', { 
          amount: paymentAmount,
          description: "testing payment",
          receipt_email: "client@mail.com",
        });
        console.log('PaymentIntent response:', response.data);
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error('Error creating payment intent:', error);
      }
    }
  
    createPaymentIntent();
  }, [])

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
