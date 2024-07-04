import React from 'react';
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
import SelectCountry from '../components/Country';
import RoomMock from '../assets/images/Mock/RoomMock.jpg';
import HotelMock from '../assets/images/Mock/HotelMock.jpg';
import CustomButton from '../components/Button';
import Input from '../components/Input';

const HOUSE_RULES = [
  {
    title: 'Check-in',
    content: [
      'From 15:00 to 00:00',
      'Guests are required to show a photo identification and credit card upon check-in',
      "You'll need to let the property know in advance what time you'll arrive.",
    ],
  },
  {
    title: 'Check-out',
    content: ['Available 24 hours'],
  },
  {
    title: 'Cancellation/prepayment',
    content: [
      'Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.',
    ],
  },
  {
    title: 'Pets',
    content: ['Pets are not allowed.'],
  },
  {
    title: 'No age restriction',
    content: ['There is no age requirement for check-in'],
  },
];

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

const ContactForm = () => (
  <div>
    <FormControl className='text-fg-text-black'>
      <RadioGroup
        aria-labelledby='contact-radio-buttons-group-label'
        defaultValue='Use your profile detail as contact'
        name='radio-buttons-group'
      >
        <FormControlLabel
          value='Use your profile detail as contact'
          control={<Radio />}
          label='Use your profile detail as contact'
        />
        <FormControlLabel
          value='Use new profile as contact'
          control={<Radio />}
          label='Use new profile as contact'
        />
      </RadioGroup>
    </FormControl>
    <div className='mt-8 mb-4 gap-4'>
      <Input
        text='text'
        inputName='Full Name'
        className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder='Enter your Full Name'
      />

      <Input
        text='text'
        inputName='Email'
        className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        variant='outlined'
        placeholder='Enter your Email'
      />
      <Input
        text='text'
        inputName='Retype Email'
        className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder='Retype your Email'
      />

      <Input
        type='number'
        inputName='Phone Number'
        className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder='Enter your Phone Number'
      />
      <SelectCountry width={480} />
    </div>
  </div>
);

const PaymentForm = () => (
  <div>
    <TextField
      select
      fullWidth
      label='Payment Method'
      defaultValue='Credit or debit card'
      variant='outlined'
      className='mb-4'
    >
      <MenuItem value='Credit or Debit card'>Credit or Debit card</MenuItem>
    </TextField>

    <Input
      text='text'
      inputName='Card Number'
      className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      placeholder='Card Number'
    />
    <div className='flex space-x-4 mb-4'>
      <Input
        text='text'
        inputName='Expire Date'
        className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder='Expire Date'
      />
      <Input
        text='text'
        inputName='CVV'
        className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder='CVV'
      />
      <Input
        text='text'
        inputName='Zip Code'
        className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder='Zip Code'
      />
    </div>

    <SelectCountry width={480} />
  </div>
);

const HouseRules = () => (
  <div className='p-4 bg-gray-100 rounded mb-4'>
    {HOUSE_RULES.map((rule, index) => (
      <div key={index}>
        <p>
          <strong>{rule.title}</strong>
        </p>
        {rule.content.map((line, idx) => (
          <p key={idx} className='text-fg-text-black'>
            {line}
          </p>
        ))}
        {index !== HOUSE_RULES.length - 1 && <br />}
      </div>
    ))}
  </div>
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
  return (
    <div className='p-8  min-h-screen mx-16'>
      <BreadcrumbNavigation />
      <div className='grid grid-cols-2 gap-8 mt-8'>
        <div className='p-8 border-gray-900 shadow rounded'>
          <h2 className='text-xl text-fg-text-black font-semibold mb-4'>
            Let us confirm your Contact
          </h2>
          <ContactForm />
          <h2 className='text-xl text-fg-text-black font-semibold mt-14 mb-4'>
            Pay with
          </h2>
          <PaymentForm />
          <h2 className='text-xl text-fg-text-black font-semibold mt-14 mb-4'>
            House rules
          </h2>
          <HouseRules />
          <h2 className='text-xl text-fg-text-black font-semibold mb-4'>
            Special Request
          </h2>
          <TextField
            fullWidth
            label='Please write your requests'
            variant='outlined'
            className='mb-4'
            multiline
            rows={4}
          />
          <div className='flex justify-end'>
            <CustomButton className='w-44 shadow-lg text-fg-text-white hover:bg-fg-grey'>
              {' '}
              Checkout{' '}
            </CustomButton>
          </div>
        </div>
        <div>
          <BookingSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
