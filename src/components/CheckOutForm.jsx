import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import axios from "axios";

const CheckOutForm = ({ token, id, data, price }) => {
  console.log("price " + price);
  console.log("title " + data.product_name);
  //   console.log(id);
  const stripe = useStripe();
  const elements = useElements();
  const stripePrice = price * 100;
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    // console.log(data);
    event.preventDefault();

    const cardElement = elements.getElement(CardElement);

    const buyerId = await axios.get(`http://localhost:3000/user/${token}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    console.log(buyerId);
    console.log(data.product_name);
    const stripResponse = await stripe.createToken(cardElement, {
      name: buyerId.data,
      title: data.product_name,
      price: price,
    });
    console.log(stripResponse);
    console.log(id);
    const stripeToken = stripResponse.token.id;
    console.log(stripePrice, data.product_name, buyerId);
    const response = await axios.post(
      `http://localhost:3000/offer/${id}/payment/`,
      stripeToken,
      {
        name: buyerId,
        title: data.product_name,
        price: stripePrice,
      }
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
