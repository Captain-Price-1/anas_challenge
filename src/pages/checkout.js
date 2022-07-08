import React from "react";

const Checkout = ({ cart, hideCart }) => {
  hideCart(false);

  return (
    <div className="checkout-main">
      <div className="checkout-header">
        <h1>Checkout</h1>
        <p>Thank you for your order</p>
      </div>
    </div>
  );
};

export default Checkout;
