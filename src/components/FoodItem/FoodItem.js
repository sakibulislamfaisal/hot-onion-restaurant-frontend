import React from "react";
import "./FoodItem.css";

const FoodItem = (props) => {
  const { id, title, subtitle, description, price, img } = props.food;
  return (
    <div className="col-md-4 food-item">
      <div className="card text-center">
        <img src={img} alt="card" className="card-img-top" />
        <div className="card-body">
          <h5>{title}</h5>
          <p>{subtitle}</p>
          <p>{description}</p>
          <h4>{price}</h4>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
