import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import axios from "axios";

const CheckOutForm = ({ token, id }) => {
  //   console.log(token);
  //   console.log(id);
  const stripe = useStripe();
  const elements = useElements();

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cardElement = elements.getElement(CardElement);

    const buyerId = await axios.post(
      `http://localhost:3000/user/${token}`,

      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    console.log(buyerId);
    const stripResponse = await stripe.createToken(cardElement, {
      name: buyerId,
    });
    console.log(stripResponse);
    const stripeToken = stripResponse.token.id;
    const response = await axios.post(
      `http://localhost:3000/offer/${id}/payment/`,
      stripeToken
    );
    console.log(response);
    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
  };
  return (
    <>
      {!completed ? (
        <form onSubmit={handleSubmit}>
          <CardElement /> <button type="submit">Payer</button>
        </form>
      ) : (
        <span>Paiement validé</span>
      )}
    </>
  );
};

export default CheckOutForm;
