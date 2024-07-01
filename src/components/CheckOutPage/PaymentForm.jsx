import { useState } from "react"
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'

const PaymentForm = ({clientSecret}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [errorMessage, setErrorMessage] = useState(null)
    const [paymentProcessing, setPaymentProcessing] = useState(false)
  
    const options = {
      business: {name:"FLEXGO"},
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
          return_url: 'http://localhost:5173/checkout-complete', 
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
        <>
        {clientSecret && <PaymentElement type='payment' options={options} /> }
        {errorMessage && <div>{errorMessage}</div>}
        {/* <button type="submit" disabled={!stripe || paymentProcessing}>
          {paymentProcessing ? 'Processing...' : 'Pay'}
        </button> */}
        </>
    )
  }

export default PaymentForm