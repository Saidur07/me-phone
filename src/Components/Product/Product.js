import React from "react";
import { Card } from "react-bootstrap";
import { BsCartPlus } from "react-icons/bs";
import "./Product.css";

const Product = ({ phone, handleAddToCart }) => {
  const { img, name, price } = phone;
  return (
    <div className="single-card">
      <Card className="mx-auto phone-card">
        <img src={img} alt="" className="img" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>${price}</Card.Text>
          <button
            className="button btn button-size w-100"
            onClick={() => handleAddToCart(phone)}
          >
            <p className="btn-text mx-auto">Add to Cart</p>
            <BsCartPlus></BsCartPlus>
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
