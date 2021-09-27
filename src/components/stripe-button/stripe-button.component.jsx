import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = 'pk_test_51JdfO0CZmFJntXHdzf6bz4z1sbdZB90ciSWiIUWeYRfzdBvpsXtU78MJBpbPYaxrXT8d7eq9aQHw75UseFJstcmI004zL4ocRX' ;

  const ontoken = token => {
    console.log(token);
    alert('payment Successful');
  }

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