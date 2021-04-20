import React, { useMemo } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import useResponsiveFontSize from "../../utils/use-responsive-font-size";
import './card-form.css'
import Button from '../button/button'

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const CardForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("no hay stripe");

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: event.target.name.value,
        email: event.target.email.value,
      },
    });

    console.log("[PaymentMethod]", payload);
  };

  return (
    <div className='card-form-outside'>
      <form onSubmit={handleSubmit} className='card-form-container'>
        <div className='card-form-personal-data'>
          <input name="name" type="text" placeholder="Nombre" required />

          <input name="lastName" type="text" placeholder="Apellido" required />
        </div>

        <div className='card-form-email'>
          <input
            style={{widht:'400px'}}
            name="email"
            type="email"
            placeholder="jane.doe@example.com"
            required
          />
        </div>

        <div className='card-form-card'>
          <CardElement
            style={{widht:'100%'}}
            options={options}
            onReady={() => {
              console.log("CardElement [ready]");
            }}
            onChange={(event) => {
              console.log("CardElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardElement [blur]");
            }}
            onFocus={() => {
              console.log("CardElement [focus]");
            }}
          />
        </div>

        <Button type="submit" disabled={!stripe}>PAGAR</Button>
      </form>
    </div>
  );
};

export default CardForm;
