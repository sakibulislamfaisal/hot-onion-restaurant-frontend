import React from "react";
import { useForm } from "react-hook-form";
import "./CheckOut.css";

const CheckOut = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  return (
    <div className="shipment container py-5 mt-5">
      <div className="row">
        <div className="col-md-6 mt-5 text-center">
          <h4>Edit Delivery Details</h4>
          <hr className="border border-danger" />
          <form className="py-5 delivery-info">
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
                name="business"
                className="form-control"
                ref={register({ required: true })}
                placeholder="Business name"
              />
              {errors.business && (
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
