import React from "react";

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm ";

const stripePromise = loadStripe('pk_test_51MhEx6AM71JH6IUZM4ASCja7727EGnXEVXJmM9KgdItoHLG1F4AKNQ5UKysdZNzv5i18dRwd5hsc1i5UKX0tTIW300Rfq0Ddgk'); //Afaq

function Billing(){
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default Billing;