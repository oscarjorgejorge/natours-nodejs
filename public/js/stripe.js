/* eslint-disable */

import Axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe('pk_test_mcRmj0vRe3xVTQq6HQ5j71Cg00nnJLnYFK');

export const bookTour = async tourId => {
    try {
        // 1) Get checkout session from API
        const session = await Axios(`/api/v1/bookings/checkout-session/${tourId}`);

        // 2) Create checkout form + charge credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (err) {
        console.log(err);
        showAlert('error', err);
    }
};