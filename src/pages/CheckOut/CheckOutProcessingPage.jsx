import React, { useEffect, useState } from 'react'
import { useStripe } from '@stripe/react-stripe-js'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function CheckOutProcessingPage () {

    const stripe = useStripe()
    const location = useLocation()
    const navigate = useNavigate()
    const [message, setMessage] = useState('')

    useEffect(() => {
        if(!stripe){
            return
        }

    const clientSecret = new URLSearchParams(location.search).get('payment_intent_client_secret')
    const reservationId = new URLSearchParams(location.search).get('res_id')
    if (!clientSecret) {
        return
      }


      const retrievePaymentIntent = async () => {
        try {
          const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret)
  
          switch (paymentIntent.status) {
            case 'succeeded':
              setMessage('Payment succeeded')
              await setTimeout(()=>navigate(`/checkout/success/${reservationId}`),3000)
            
              break
            case 'processing':
              setMessage('Your payment is processing.')
              break
            case 'requires_payment_method':
              setMessage('Your payment was not successful, please try again.')
              break
            default:
              setMessage('Something went wrong.')
              break
          }
        } catch (error) {
          console.error('Error retrieving payment intent:', error)
          setMessage('Something went wrong.')
        }
      }
  
      retrievePaymentIntent()
    }, [stripe, location])
    return <div>
      <h2>Payment Status</h2>
      <p>{message}</p>
    </div>
}