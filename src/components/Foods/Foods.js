import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FoodItem from "../FoodItem/FoodItem";
import "./Foods.css";

const Foods = (props) => {
  const [food, setFood] = useState([]);
  const [selectedFood, setSelectedFood] = useState("breakfast");

  useEffect(() => {
    fetch("https://hot-onion-restaurant-server.herokuapp.com/foods")
      .then((res) => res.json())
      .then((data) => setFood(data))
      .catch((err) => console.log(err));
  }, [food.length]);
  const categoryWiseFood = food.filter(
    (food) => food.category === selectedFood
  );
  //console.log(categoryWiseFood);
  return (
    <>
      <section className="food-section py-4">
        <div className="container">
          <nav>
            <ul className=" nav justify-content-center">
              <li
                className="nav-item"
                onClick={() => setSelectedFood("breakfast")}
              >
                <span
                  className={
                    selectedFood === "breakfast"
                      ? "active nav-link "
                      : "nav-link"
                  }
                >
                  Breakfast
                </span>
              </li>
              <li className="nav-item" onClick={() => setSelectedFood("lunch")}>
                <span
                  className={
                    selectedFood === "lunch" ? "active nav-link" : "nav-link"
                  }
                >
                  Lunch
                </span>
              </li>
              <li
                className="nav-item"
                onClick={() => setSelectedFood("dinner")}
              >
                <span
                  className={
                    selectedFood === "dinner" ? "active nav-link" : "nav-link"
                  }
                >
                  Dinner
                </span>
              </li>
            </ul>
          </nav>
          <div className="row my-5">
            {categoryWiseFood.map((food) => (
              <FoodItem food={food} key={food.id}></FoodItem>
            ))}
          </div>
          <div className="text-center">
            {props.cart.length > 0 ? (
              <Link to="/checkout">
                <button className="btn btn-danger">Check Out Your Food</button>
              </Link>
            ) : (
              <button disabled className="btn btn-secondary">
                Check Out Your Food
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Foods;
