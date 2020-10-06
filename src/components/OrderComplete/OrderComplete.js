import React, { useEffect, useState } from "react";
import Rider from "../../logo/rider.png";
import RiderHalmet from "../../logo/helmet.png";
import mapImg from "../../logo/google.png";
const OrderComplete = (props) => {
  const [orderId, setOrderId] = useState();
  useEffect(() => {
    setOrderId(props.orderId);
  }, [props]);

  return (
    <div className="container pt-5 my-5">
      <div className="row">
        <div className="col-md-8">
          <img className="img-fluid" src={mapImg} alt="" />
        </div>
        <div className="col-md-4 pl-md-5">
          <div className="bg-light p-3 rounded">
            <img className="w-25 ml-5" src={Rider} alt="" />
            <div className="bg-white  rounded p-3 my-3">
              <div>
                {orderId ? (
                  <div>
                    <h6>Order Id :</h6>
                    <p>{props.orderId}</p>
                  </div>
                ) : (
                  <h6>Fetching Order Id ...</h6>
                )}
                <h5>Your Location</h5>
                {props.deliveryInfo ? (
                  <p>
                    {props.deliveryInfo.flat}, {props.deliveryInfo.road}
                  </p>
                ) : (
                  <p>Loading data ...</p>
                )}
              </div>
              <div>
                <h5>Shop Address</h5>
                <p>Red Onion Restaurant</p>
              </div>
            </div>
            <h1>3:00</h1>
            <p>Estimated Delivery</p>

            <div className="bg-white rounded p-3 d-flex">
              <img className="w-25 mr-2" src={RiderHalmet} alt="" />
              <div>
                <h6>Foyshal</h6>
                <p>Your Rider</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
