import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../Login/useAuth";
import "./CheckOut.css";

const CheckOut = (props) => {
  const auth = useAuth();
  // console.log(auth);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    props.deliverHandleInfo(data);
    props.handleUserEmail(auth.user.email);
    // console.log(data);
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
        <div className="col-md-6 mt-5 text-center">
          <h4>Edit Delivery Details</h4>
          <hr className="border border-danger" />
          <form
            className="py-5 delivery-info"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group">
              <input
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
      </div>
    </div>
  );
};

export default CheckOut;
