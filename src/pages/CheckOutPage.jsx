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
import RoomMock from '../assets/images/Mock/RoomMock.jpg';
import HotelMock from '../assets/images/Mock/HotelMock.jpg';
import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../config/stripe';
import axios from '../config/axios'
import CheckOutForm from '../components/CheckOutPage/CheckOutForm';



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






const BookingSummary = () => (
  <div className='lg:sticky lg:top-8 p-8 bg-white shadow rounded'>
    <h2 className='text-xl text-fg-text-black font-semibold mb-4'>
      Booking Summary
    </h2>
    <div className='flex mb-4'>
      <img src={HotelMock} className='w-56 h-auto rounded-xl' />
      <div className='flex flex-col ml-4'>
        <h3 className='text-lg  text-fg-text-black font-semibold'>
          Hilton Pattaya
        </h3>
        <p className=' text-fg-text-black'>
          333/101 Moo 9, Nong Prue, Banglamung, Pattaya Beach Road, Pattaya,
          Thailand, 20260
        </p>
        <div className='flex'>
          <div>
            <svg
              viewBox='0 0 24 24'
              width='30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <path
                  d='M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z'
                  fill='#ffe27a'
                ></path>{' '}
              </g>
            </svg>{' '}
          </div>
          <div className='mt-2'>
            {' '}
            <p>5.0 (1 review)</p>{' '}
          </div>
        </div>
      </div>
    </div>
    <div className='flex mb-4'>
      <img src={RoomMock} className='w-56 h-auto rounded-xl' />
      <div className='flex flex-col ml-4  text-fg-text-black'>
        <h4 className='text-lg font-semibold'>Studio Executive</h4>
        <p>1 single bed</p>
        <p>30 sq.m.</p>
        <p>THB 3,726 / Per night</p>
      </div>
    </div>
    <hr />
    <div className='mt-8'>
      <div className='flex justify-between text-fg-text-black '>
        <p>Room price (1 room x 4 nights): </p>
        <p>THB 24,000.00 </p>
      </div>
      <div className='flex justify-between text-fg-text-black'>
        <p>Service fee: </p>
        <p> THB 1,826.84</p>
      </div>
      <div className='flex justify-between mt-2 text-lg font-semibold'>
        <p>Total Payment: </p>
        <p>THB 25,820.84 </p>
      </div>
      <div className='mt-2'>
        <small className='text-fg-text-black'>
          Included in price: Tax 7%, Service charge 10%
        </small>
      </div>
    </div>
  </div>
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
