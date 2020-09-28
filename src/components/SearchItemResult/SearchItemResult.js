import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FoodItem from "../FoodItem/FoodItem";
import "./SearchItemResult.css";

const SearchItemResult = () => {
  const { searchItem } = useParams();
  const [allFood, setAllFood] = useState([]);
  useEffect(() => {
    fetch("https://hot-onion-restaurant-server.herokuapp.com/foods")
      .then((res) => res.json())
      .then((data) => setAllFood(data))
      .catch((err) => console.log(err));
  }, []);

  const SearchingResult = allFood.filter((food) =>
    food.title.includes(searchItem)
  );
  // console.log(SearchingResult);

  return (
    <section className="search-section">
      <div className="container">
        <div className="text-center py-4 search">
          <h3>Search Result</h3>
        </div>
        <div className="row py-4">
          {SearchingResult.length === 0 && (
            <h3 className="text-danger col-12 text-center">No Food Found!!!</h3>
          )}
          {SearchingResult.map((food) => (
            <FoodItem food={food} key={food.id}></FoodItem>
          ))}
        </div>
        <div className="text-center">
          <Link to="/">
            <button className="btn btn-danger">See Our All Food</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SearchItemResult;
