import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

const stripePromise = loadStripe(
  "pk_live_51TBhPpADZVEnjWHiiKzPJnXCrUejemJLCBagTgEsxsYBiD3cwMYwmQZhzOyaRrEqfyG9nivWvoBeSNz38StLAUiL0035KsNmGH",
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(""); // default $10
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);

    try {
      if (!amount || Number(amount) < 0.5) {
        toast.info("Minimum donation is $0.50");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
        return;
      }

      const res = await fetch("https://api.kingsperpmining.com/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Number(amount) * 100, // ✅ dollars → cents
        }),
      });
      const { clientSecret } = await res.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      if (result.error) toast.error(result.error.message);
      else if (result.paymentIntent.status === "succeeded") {
        toast.success("Shukrann! \n Donation successful! BarakAllahu 💖");
        setTimeout(() => {
          window.location = "/donation-success";
        }, 3000);
      }
    } catch (err) {
      console.log(err);
      toast.error("Payment failed. Try again!");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <h2 style={{ color: "#24965E", marginBottom: "10px" }}>
        Make a Donation
      </h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount to donate ($)"
        style={{
          padding: "12px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "100%",
          outline: "none",
        }}
      />
      <div
        style={{
          padding: "12px",
          border: "1px solid #ccc",
          borderRadius: "12px",
          background: "#f9f9f9",
        }}
      >
        <CardElement
          options={{
            hidePostalCode: true,
            style: {
              base: {
                fontSize: "16px",
                color: "#333",
                "::placeholder": { color: "#999" },
                fontFamily: "Arial, sans-serif",
                padding: "10px",
              },
              invalid: {
                color: "#fa755a",
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        style={{
          background: "#24965E",
          color: "#fff",
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {loading ? "Processing..." : "Donate Now"}
      </button>
    </form>
  );
};

export default function DonationFormWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
