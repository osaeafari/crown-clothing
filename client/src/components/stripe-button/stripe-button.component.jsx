import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = 'pk_test_51JdfO0CZmFJntXHdzf6bz4z1sbdZB90ciSWiIUWeYRfzdBvpsXtU78MJBpbPYaxrXT8d7eq9aQHw75UseFJstcmI004zL4ocRX' ;

  const ontoken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
    .then(response => {
      alert('Payment Successful');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert(
        'There was an issues with your payment. Please ensure you use the provided credit card'
      );
    });
  };

  return (
    <StripeCheckout
      label= 'Pay Now'
      name= 'Crown Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.szg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={ontoken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;