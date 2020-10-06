import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../Login/useAuth";
import "./CheckOut.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "../Payment/Payment";
import { Link } from "react-router-dom";

const CheckOut = (props) => {
  console.log(props.cart.length);
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
        <div className="col-md-6 py-5 ">
          <div className="info mb-5">
            <h3 className="text-center">Hot Onion Restaurant</h3>
            <h6 className="text-center">Delivery with in the 30-40 minute</h6>
            <h6 className="text-center">Happy Delivery Food</h6>
          </div>
          {props.cart.map((item) => (
            <div className="single-item rounded d-flex align-items-center justify-content-between p-2 bg-light">
              <img
                src={item.img}
                width="120px"
                className="single-image py-2"
                alt=""
              />
              <div className="text-center" style={{ fontSize: "16px" }}>
                <p>{item.title}</p>
                <h6 className="text-danger">{item.price}</h6>
                <p>Delivery free</p>
              </div>
              <div className="checkout-btn ml-3 btn">
                <button
                  onClick={() => props.checkOutItem(item.id, item.quantity + 1)}
                  className="btn font-weight-bolder"
                >
                  +
                </button>
                <button className="btn bg-white rounded">
                  {item.quantity}
                </button>

                {item.quantity > 0 ? (
                  <button
                    className="btn font-weight-bolder"
                    onClick={() =>
                      props.checkOutItem(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                ) : (
                  <button disabled className="btn font-weight-bolder">
                    -
                  </button>
                )}
              </div>
            </div>
          ))}
          <div className="cart-calculation py-5 mt-4">
            <p className="d-flex justify-content-between">
              <span>Sub Total . {totalQuantity} Item</span>{" "}
              <span>${subTotal.toFixed(2)}</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Tax</span> <span>${tax.toFixed(2)}</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Delivery Fee</span> <span>${deliveryFee}</span>
            </p>
            <p className="h5 d-flex justify-content-between">
              <span>Total</span> <span>${grandTotal.toFixed(2)}</span>
            </p>
            {totalQuantity ? (
              paid ? (
                <Link to="/order-complete">
                  <button
                    onClick={() => props.clearCart()}
                    className="btn btn-block btn-danger btn-secondary py-2"
                  >
                    CheckOut Food
                  </button>
                </Link>
              ) : (
                <button disabled className="btn btn-block btn-secondary py-2">
                  CheckOut Your Food
                </button>
              )
            ) : (
              <button disabled className="btn btn-block btn-secondary py-2">
                Nothing is here
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
//pk_test_5u4MdV0k3HrcnkqeNfD3MCIF007tWoO0eL
