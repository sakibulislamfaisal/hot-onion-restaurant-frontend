import React from "react";
import { Link } from "react-router-dom";
import "./FoodItem.css";

const FoodItem = (props) => {
  const { id, title, subtitle, description, price, img } = props.food;
  return (
    <div className="col-md-4 food-item">
      <Link
        to={"/singlefood/" + id}
        className="navigation-food"
        style={{ textDecoration: "none" }}
      >
        <div className="card text-center">
          <img src={img} alt="card" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-title">{subtitle}</p>
            <p className="card-title">{description}</p>
            <h4 className="card-title">${price}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FoodItem;
