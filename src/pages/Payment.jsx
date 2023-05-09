import CheckOutForm from "../components/CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";

const Payment = ({ token }) => {
  const { id } = useParams();
  // console.log(id);
  const stripePromise = loadStripe(
    "pk_test_51N5sWrEP7RE31YxqwqUoKGcFKSmfZaaPhYmtqF76G9zR8CN2atBlKelEpFGdfdoM34wGEKDLVE0goGEzHurfVcIk00JWycFKI2"
  );
  return (
    <>
      <Elements stripe={stripePromise}>
        <CheckOutForm token={token} id={id} />
      </Elements>
    </>
  );
};

export default Payment;
