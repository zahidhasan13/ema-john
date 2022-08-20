import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  let totalPrice = 0;
  let shipping = 0;
  let quantity = 0;
  for(const product of cart){
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((totalPrice * 0.1).toFixed(2));
  const grandTotal = (totalPrice + shipping + tax).toFixed(2);
  return (
    <div className="calculate-cart">
      <h3>Order Summary</h3>
      <h4>Selected Item: {quantity}</h4>
      <h4>Total Price: ${totalPrice}</h4>
      <h4>Total Shipping charge: ${shipping}</h4>
      <h4>Tax: ${tax}</h4>
      <h2>Grand Total: ${grandTotal}</h2>
    </div>
  );
};

export default Cart;
