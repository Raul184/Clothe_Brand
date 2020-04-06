import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeButton = ({ price }) => {
  // Stripe wants the price in cents
  // $ 
  const priceCents = price * 100;
  const key = 'pk_test_qpk8XXIK4nkQNnyLqJ3RH5Mt009GgCH5Lr';

  const onToken = token => {
    // Here I would pass the token to my backEnd to process the charges

    // In this case , I'm not processing Yet
    console.log(token);
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='Mea C F'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Total: ${price}`}
      currency='USD'
      amount={priceCents}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={key}
    >
    </StripeCheckout>
  )
}

export default StripeButton;