import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './card-form';

const stripePromise = loadStripe('pk_test_IjxNzJ5uso6iTd35SxqOveBi00IvZFzdQu');

const cardFormElement = (props) => {
    return (
        <Elements stripe={stripePromise} >
            <CardForm extras={props.extras} />
        </Elements>
    )
}

export default cardFormElement

