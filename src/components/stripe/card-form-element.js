import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './card-form';

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);

const cardFormElement = (props) => {
    return (
        <Elements stripe={stripePromise} >
            <CardForm extras={props.extras} setDeleteShow={props.setDeleteShow} />
        </Elements>
    )
}

export default cardFormElement

