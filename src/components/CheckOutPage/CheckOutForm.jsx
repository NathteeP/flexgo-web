import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import CustomButton from '../../components/Button';
import HouseRulesBlock from './HouseRulesBlock';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
} from '@mui/material';
import Input from '../../components/Input';
import SelectCountry from '../../components/Country';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { reservationSchema } from '../../validators/validate-reservation';
import { confirmPayment } from '../../store/slices/payment-slice';
import reservationApi from '../../api/reservation';
import {
  setReservationId,
  setTransactionId,
  setUsingCurrentUserProfile,
} from '../../store/slices/reservation-slice';
import { toast } from 'sonner';

export default function CheckOutForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.user.authUser);
  const { isLoading, error } = useSelector((state) => state.payment);
  const useCurrentUserProfile = useSelector(
    (state) => state.reservation.useCurrentUserProfile
  );
  const { checkInDate, checkOutDate, roomId, customerAmount } = useSelector(
    (state) => state.reservation.reservationData
  );
  const { netPrice, serviceFee } = useSelector(
    (state) => state.payment.transactionData
  );

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(reservationSchema),
  });

  const usingExistedProfileData = () => {
    setValue('customerName', authUser.fullName);
    setValue('customerEmail', authUser.email);
    setValue('confirmEmail', authUser.email);
    if (authUser.phoneNumber) setValue('customerPhone', authUser.phoneNumber);
    else dispatch(setUsingCurrentUserProfile(false));
  };

  useEffect(() => {
    if (!authUser) dispatch(setUsingCurrentUserProfile(false));
    else usingExistedProfileData();
  }, [authUser, dispatch]);

  const handleChangeRadio = (event) => {
    const value = event.target.value === 'true';
    dispatch(setUsingCurrentUserProfile(value));
  };

  const options = {
    business: { name: 'FLEXGO' },
    fields: {
      billingDetails: {
        address: {
          country: 'never',
        },
      },
    },
  };

  const handleCheckOut = async (data) => {
    if (!stripe || !elements) {
      console.error('Stripe.js has not yet loaded.');
      return;
    }
    try {
      const reservationAddingData = {
        checkInDate,
        checkOutDate,
        customerAmount,
        roomId,
        transaction: {
          netPrice,
          serviceFee,
          feeId: +import.meta.env.VITE_FEE_ID,
        },
      };
      if (authUser) reservationAddingData.userId = authUser.id;

      data = {
        ...data,
        ...reservationAddingData,
      };

      const promise = reservationApi.create(data);

      toast.promise(promise, {
        error: (err) => {
          console.error('Login failed:', err);
          return `Reservation failed. Please contact admin`;
        },
      });

      const response = await promise;
      const reservationId = response.data.id;
      const transactionId = response.data.transaction.id;

      dispatch(setReservationId(reservationId));
      dispatch(setTransactionId(transactionId));

      const paymentConfirmationResult = await dispatch(
        confirmPayment({ stripe, elements })
      );

      if (confirmPayment.rejected.match(paymentConfirmationResult)) {
        console.log(paymentConfirmationResult.error);
        toast.error('Payment confirmation failed. Please try again.');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCountryChange = (country) => {
    setValue('customerCountry', country.label);
    clearErrors('customerCountry');
  };

  return (
    <div className='p-8 border-gray-900 shadow rounded'>
      <form onSubmit={handleSubmit(handleCheckOut)}>
        <h2 className='text-xl text-fg-text-black font-semibold mb-4'>
          Let us confirm your Contact
        </h2>
        <div>
          <FormControl className='text-fg-text-black'>
            <RadioGroup
              aria-labelledby='contact-radio-buttons-group-label'
              name='radio-buttons-group'
              value={useCurrentUserProfile.toString()}
              onChange={handleChangeRadio}
            >
              <FormControlLabel
                value='true'
                control={<Radio />}
                label='Use your profile detail as contact'
                disabled={!authUser}
              />
              <FormControlLabel
                value='false'
                control={<Radio />}
                label='Use new profile as contact'
              />
            </RadioGroup>
          </FormControl>
          <div className='mt-8 mb-4 gap-4'>
            <Input
              text='text'
              inputName='Full Name'
              name='customerName'
              {...register('customerName')}
              error={errors.customerName?.message}
              className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your Full Name'
              disabled={useCurrentUserProfile}
            />

            <Input
              text='text'
              inputName='Email'
              name='customerEmail'
              {...register('customerEmail')}
              error={errors.customerEmail?.message}
              className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              variant='outlined'
              placeholder='Enter your Email'
              disabled={useCurrentUserProfile}
            />
            <Input
              text='text'
              inputName='Confirm Email'
              name='confirmEmail'
              {...register('confirmEmail')}
              error={errors.confirmEmail?.message}
              className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Retype your Email'
              disabled={useCurrentUserProfile}
            />

            <Input
              type='text'
              inputName='Phone Number'
              name='customerPhone'
              {...register('customerPhone')}
              error={errors.customerPhone?.message}
              className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your Phone Number'
              disabled={useCurrentUserProfile}
            />
            <SelectCountry width='100%' onCountryChange={handleCountryChange} />
            {errors.customerCountry?.message && (
              <p className='text-red-500 text-sm mt-2'>
                {errors.customerCountry?.message}
              </p>
            )}
          </div>
        </div>
        <h2 className='text-xl text-fg-text-black font-semibold mt-14 mb-4'>
          Pay with
        </h2>
        <div>
          {clientSecret ? (
            <PaymentElement options={options} />
          ) : (
            <div>Loading...</div>
          )}
          {error && <div className='text-red-500'>{error}</div>}
        </div>

        <h2 className='text-xl text-fg-text-black font-semibold mt-14 mb-4'>
          House rules
        </h2>
        <HouseRulesBlock />
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
          name='optionalRequest'
          {...register('optionalRequest')}
        />
        <div className='flex justify-end'>
          <CustomButton
            className='w-44 shadow-lg text-white hover:text-fg-text-black'
            type='submit'
          >
            {' '}
            {isLoading ? 'Processing...' : 'Checkout'}{' '}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
