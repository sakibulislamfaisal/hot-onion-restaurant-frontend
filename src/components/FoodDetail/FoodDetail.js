import {
  faCheckCircle,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FoodDetail.css";

const FoodDetail = (props) => {
  const { id } = useParams();
  const [singleFoodDetail, setSingleFoodDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const foodCart = props.addToCartFood;

  //console.log(id);
  useEffect(() => {
    fetch(`https://hot-onion-restaurant-server.herokuapp.com/singlefood/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleFoodDetail(data))
      .catch((err) => console.log(err));
  }, [id]);
  // console.log(singleFoodDetail);
  const { title, price } = singleFoodDetail;
  const handleCartAdd = () => {
    singleFoodDetail.quantity = quantity;
    foodCart(singleFoodDetail);
    setIsSuccess(true);
  };
  if (isSuccess) {
    setTimeout(() => setIsSuccess(false), 3000);
  }
  console.log(singleFoodDetail);
  return (
    <div className="food-detail py-5 my-5 container">
      <div className="row">
        <div className="col-md-6 py-5 ">
          <h1 className="mb-2">{title}</h1>
          <p className="mb=0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            consequuntur? Similique quasi quis molestiae praesentium? Quo
            dolorum distinctio consectetur quis unde, neque repellendus.
            Consequuntur obcaecati nulla blanditiis quisquam, suscipit iste
            omnis non aliquid, ea animi et distinctio eligendi, consectetur
            excepturi!
          </p>
          <div className="d-flex mt-4">
            <h2 className="mt-2">${price}</h2>
            <div className="cart-item ml-4">
              <button
                className="btn mr-4 cart-quantity"
                onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}
              >
                -
              </button>
              {quantity}
              <button
                className="btn ml-4 cart-quantity "
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <div className="cart-add-food py-5 ">
              <button
                className="btn btn-danger cart-add"
                onClick={handleCartAdd}
              >
                <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
              </button>
              <br />

              {isSuccess && (
                <p className=" success-msg text-success">
                  <FontAwesomeIcon icon={faCheckCircle} /> Food Added
                  Successfully To Cart
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <img className="w-100 large-img " src={singleFoodDetail.img} alt="" />
        </div>
        <div className="row">
          <div className="col-md-3">
            <img
              className="w-100 small-img"
              src={singleFoodDetail.img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
