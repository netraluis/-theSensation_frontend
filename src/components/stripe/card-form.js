import React, { useMemo, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import {Link} from "react-router-dom";

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
  const [ booking, setBooking ] = useState(false)
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const {startDate, endDate, room} = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
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
          .then(response=>{
            props.setDeleteShow(false)
            setBooking(true)
          })
    })
  };

  return (
    <>
    <div className='card-form-outside'>

      {
        !booking &&
        [<form onSubmit={handleSubmit} className='card-form-container'>
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
      </form>]
    }

      { booking &&
      [<div>
        <h3>Su reserva se ha realizado correctamente, ya le estamos esperando</h3>
        <Button><Link style={{color:'unset', textDecoration: 'unset'}} to='/'>
        Volver
        </Link></Button>
      </div>]
    }
    </div>
      </>
  );
};

export default CardForm;
