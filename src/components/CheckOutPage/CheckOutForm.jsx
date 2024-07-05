import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CustomButton from '../../components/Button';
import HouseRulesBlock from "./HouseRulesBlock";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField
} from '@mui/material';
import Input from '../../components/Input';
import SelectCountry from '../../components/Country';
import { useForm } from 'react-hook-form'
import { joiResolver } from "@hookform/resolvers/joi";
import { reservationSchema } from "../../validators/validate-reservation";
import { confirmPayment } from "../../store/slices/payment-slice";
import { setReservationData } from "../../store/slices/reservation-slice";

export default function CheckOutForm ({clientSecret}) {

  const stripe = useStripe()
  const elements = useElements()
  const dispatch = useDispatch();

  const { isLoading, error, message } = useSelector((state) => state.payment);
  const reservationData = useSelector((state) => state.reservation.reservationData)


  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(reservationSchema)
  })

  const options = {
    business: {name:"FLEXGO"},
    fields: {
      billingDetails: {
        address: {
          country: 'never'
        }
      }
    }
  }

  const handleCheckOut = async (data) => {

    if (!stripe || !elements) {
        console.error('Stripe.js has not yet loaded.')
        return
      }
      
      //ปั้นข้อมูล
      // data.checkInDate = 
      console.log(data)


      const reservationId = '1111111'
      // dispatch(confirmPayment({stripe, elements, reservationId}))

}
  const handleCountryChange = (country) => {
      setValue('customerCountry', country.label)
      clearErrors('customerCountry')
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
                  name='customerName'
                  {...register('customerName')}
                  error={errors.customerName?.message}
                  className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter your Full Name'
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
                />
                <Input
                  text='text'
                  inputName='Confirm Email'
                  name='confirmEmail'
                  {...register('confirmEmail')}
                  error={errors.confirmEmail?.message}
                  className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Retype your Email'
                />
          
                <Input
                  type='text'
                  inputName='Phone Number'
                  name='customerPhone'
                  {...register('customerPhone')}
                  error={errors.customerPhone?.message}
                  className='mb-4 block bg-white border border-gray-300 rounded-lg w-full h-12 px-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter your Phone Number'
                />
                <SelectCountry width="100%" onCountryChange={handleCountryChange} />
                {errors.customerCountry?.message && 
                <p className="text-red-500 text-sm mt-2">
                  {errors.customerCountry?.message}
                </p>
                }
              </div>
            </div>
        <h2 className='text-xl text-fg-text-black font-semibold mt-14 mb-4'>
          Pay with
        </h2>
        <div>
        {clientSecret ? <PaymentElement options={options} /> : <div>Loading...</div>}
        {message && <div>{message}</div>}
        {error && <div>{error}</div>}

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
          <CustomButton className='w-44 shadow-lg' type="submit"
          > {isLoading ? 'Processing...' : 'Checkout'} </CustomButton>
        </div>
        </form>
      </div>
    )
}