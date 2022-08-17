import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  const totalPrice = cart.reduce((sum, cart) => sum + cart.price, 0);
  const shippingCharge = cart.reduce((sum, cart) => sum + cart.shipping, 0);
  const tax = parseFloat((totalPrice * 0.1).toFixed(2));
  const grandTotal = (totalPrice + shippingCharge + tax).toFixed(2);
  return (
    <div className="calculate-cart">
      <h3>Order Summary</h3>
      <h4>Selected Item: {cart.length}</h4>
      <h4>Total Price: ${totalPrice}</h4>
      <h4>Total Shipping charge: ${shippingCharge}</h4>
      <h4>Tax: ${tax}</h4>
      <h2>Grand Total: ${grandTotal}</h2>
    </div>
  );
};

export default Cart;
