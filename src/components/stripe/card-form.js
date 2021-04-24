import React, { useMemo } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import useResponsiveFontSize from "../../utils/use-responsive-font-size";
import './card-form.css'
import Button from '../button/button'
import { useParams } from "react-router";

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

const CardForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const {startDate, endDate, room} = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("no hay stripe");

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: event.target.name.value,
        email: event.target.email.value,
      },
    }).then(res=>{
      console.log('res', res.paymentMethod.id)
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentMethodId:res.paymentMethod.id,
          startDate,
          endDate,
          room,
          extras: props.extras,
          email:event.target.email.value
        })
      };
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/bookings/`, requestOptions)
          .then(response => response.json())
          .then(response=>console.log(response))
    })


    // console.log("[PaymentMethod]", payload);
    console.log('extras', props.extras)
  };

  return (
    <>
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
            options={options}
          />
        </div>
        <Button type="submit" disabled={!stripe}>PAGAR</Button>
      </form>
      </div>
      <div><h3>Su reserva se ha realizado correctamente, ya le estamos esperando</h3></div>
      </>
  );
};

export default CardForm;
