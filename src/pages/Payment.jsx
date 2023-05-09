import CheckOutForm from "../components/CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams, useLocation } from "react-router-dom";

const Payment = ({ token }) => {
  const { id } = useParams();
  const location = useLocation();
  const data = location.state;
  // console.log(data);
  // console.log(id);
  const stripePromise = loadStripe(
    "pk_test_51N5sWrEP7RE31YxqwqUoKGcFKSmfZaaPhYmtqF76G9zR8CN2atBlKelEpFGdfdoM34wGEKDLVE0goGEzHurfVcIk00JWycFKI2"
  );

  const protectionPrice = data.product_price * 0.1 * 2;
  const deliveryPrice = data.product_price * 0.01;
  const totalPrice = protectionPrice + data.product_price + deliveryPrice;
  return (
    <>
      <section className="payment-box container">
        <div className="recap-payment">
          <h1>Paiement</h1>
          <div className="recap-box">
            <div className="line-recap">
              <h3 className="recap-title">Commande</h3>
              <span>{data.product_price.toFixed(2)} €</span>
            </div>
            <div className="line-recap">
              <h3 className="recap-title">Frais protection acheteurs</h3>
              <span>{protectionPrice.toFixed(2)} €</span>
            </div>
            <div className="line-recap">
              <h3 className="recap-title">Frais de port</h3>
              <span>{deliveryPrice.toFixed(2)} €</span>
            </div>
            <div className="line-recap final-price">
              <h2 className="recap-title">Total</h2>
              <span>{totalPrice.toFixed(2)} €</span>
            </div>
          </div>

          <div className="card-box">
            <Elements stripe={stripePromise}>
              <CheckOutForm
                token={token}
                id={id}
                data={data}
                price={totalPrice}
              />
            </Elements>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
