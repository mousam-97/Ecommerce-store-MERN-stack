import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product(props) {
  return (
    <div key={props._id} className="card">
      <Link to={`/product/${props._id}`}>
        <img className="medium" src={props.image} alt={props.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${props._id}`}>
          <h2>{props.name}</h2>
        </Link>
        <Rating rating={props.rating} numReviews={props.numReviews} />
        <div className="price">${props.price}</div>
      </div>
    </div>
  );
}

export default Product;
