import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { phone } = props;
  return (
    <div className="cart-info-parent rounded w-50">
      <img className="cart-image" src={phone.img} alt="" />
      <h6>{phone.name}</h6>
    </div>
  );
};

export default Cart;
