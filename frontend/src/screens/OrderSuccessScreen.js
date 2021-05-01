import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function OrderSuccessScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <div className="card card-body">
      <p>
        Hey <strong>{userInfo.name}</strong>,
      </p>
      <h1 className="confirmed">
        {" "}
        <i class="fa fa-check" aria-hidden="true"></i> Your Order is Confirmed!
      </h1>
      <label />
      <p>
        Thank you for shopping with us. We'd like to let you know that Amazon
        has confirmed your order, and is preparing it for shipment. If you would
        like view the status of your order or make any changes to it, please
        visit <Link to="orderhistory">Your Orders</Link> on Amazon.com.
      </p>
      <Link to="/">Continue Shopping </Link>
    </div>
  );
}

export default OrderSuccessScreen;
