import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../Login/useAuth";
import "./CheckOut.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "../Payment/Payment";
import { Link } from "react-router-dom";

const CheckOut = (props) => {
  const auth = useAuth();
  const stripePromise = loadStripe(
    "pk_test_5u4MdV0k3HrcnkqeNfD3MCIF007tWoO0eL"
  );
  const [paid, setPaid] = useState(null);
  const paidTo = (paymentInfo) => {
    setPaid(paymentInfo);
  };

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    props.deliverHandleInfo(data);
    props.handleUserEmail(auth.user.email);
    console.log(data);
  };
  const { todoor, road, flat, businessname, address } = props.deliveryInfo;
  //console.log(props.deliveryInfo);
  //cart calculation
  const totalQuantity = props.cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  //console.log(totalQuantity);
  const subTotal = props.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  //console.log(subTotal);
  const tax = (subTotal / 100) * 5;
  const deliveryFee = totalQuantity && 20;
  const grandTotal = subTotal + tax + deliveryFee;
  // console.log(grandTotal);

  return (
    <div className="shipment container py-5 mt-5">
      <div className="row">
        <div
          className="col-md-6 mt-5 "
          style={{
            display:
              todoor && road && flat && businessname && address
                ? "none"
                : "block",
          }}
        >
          <h4 className="text-center">Edit Delivery Detail Info</h4>
          <hr className="border border-danger" />
          <form
            className="py-5 delivery-info"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group">
              <input
                defaultValue={todoor}
                name="todoor"
                className="form-control"
                ref={register({ required: true })}
                placeholder="Delivery To Door"
              />
              {errors.todoor && (
                <span className="error">This Field is required</span>
              )}
            </div>
            <div className="form-group">
              <input
                defaultValue={road}
                name="road"
                className="form-control"
                ref={register({ required: true })}
                placeholder="Road NO"
              />
              {errors.road && (
                <span className="error">Road No is required</span>
              )}
            </div>
            <div className="form-group">
              <input
                defaultValue={flat}
                name="flat"
                className="form-control"
                ref={register({ required: true })}
                placeholder="Flat and Floor No"
              />
              {errors.flat && (
                <span className="error">Flat & Floor No is required</span>
              )}
            </div>
            <div className="form-group">
              <input
                defaultValue={businessname}
                name="businessname"
                className="form-control"
                ref={register({ required: true })}
                placeholder="Business name"
              />
              {errors.businessname && (
                <span className="error">Business name is required</span>
              )}
            </div>
            <div className="form-group">
              <textarea
                defaultValue={address}
                name="address"
                col="25"
                className="form-control"
                ref={register({ required: true })}
                placeholder="Address"
              />
              {errors.address && (
                <span className="error">Address is required</span>
              )}
            </div>
            <div className="form-group">
              <button className="btn btn-danger btn-block" type="submit">
                Save & Continue
              </button>
            </div>
          </form>
        </div>
        <div
          style={{
            display:
              todoor && road && flat && businessname && address
                ? "block"
                : "none",
          }}
          className="col-md-5 py-5 mt-5"
        >
          <Elements stripe={stripePromise}>
            <Payment paidTo={paidTo} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
//pk_test_5u4MdV0k3HrcnkqeNfD3MCIF007tWoO0eL
