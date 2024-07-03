import { useState } from "react";
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import ContactForm from "./ContactForm";
import CustomButton from '../../components/Button';
import HouseRulesBlock from "./HouseRulesBlock";
import {
  TextField
} from '@mui/material';

export default function CheckOutForm ({clientSecret}) {

  const stripe = useStripe()
  const elements = useElements()
  const [errorMessage, setErrorMessage] = useState(null)
  const [paymentProcessing, setPaymentProcessing] = useState(false)

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

  const handleSubmit = async (event) => {
    event.preventDefault()
    setPaymentProcessing(true)

    if (!stripe || !elements) {
        console.error('Stripe.js has not yet loaded.')
        setPaymentProcessing(false)
        return
      }

      try {
    const payload = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}`, 
        payment_method_data: {
          billing_details: {
            address: {
              country : 'TH'
            }
          }
        }
      },
    })

    if (payload.error) {
        console.error('Payment error:', payload.error)
      setErrorMessage(payload.error.message)
    } else {
      // Handle successful payment here
      console.log('Payment successful:', payload.paymentIntent)

    }

  } catch (error) {
    console.error('Error confirming payment:', error)
  } finally {
    setPaymentProcessing(false)
  }
}

    return (
        <div className='p-8 border-gray-900 shadow rounded'>
          <form onSubmit={handleSubmit}>
        <h2 className='text-xl text-fg-text-black font-semibold mb-4'>
          Let us confirm your Contact
        </h2>
        <ContactForm />
        <h2 className='text-xl text-fg-text-black font-semibold mt-14 mb-4'>
          Pay with
        </h2>
        <div>
        {clientSecret ? <PaymentElement options={options} /> : <div>Loading...</div>}
      {errorMessage && <div>{errorMessage}</div>}

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
        />
        <div className='flex justify-end'>
          <CustomButton className='w-44 shadow-lg' type="submit"
          > {paymentProcessing ? 'Processing...' : 'Checkout'} </CustomButton>
        </div>
        </form>
      </div>
    )
}