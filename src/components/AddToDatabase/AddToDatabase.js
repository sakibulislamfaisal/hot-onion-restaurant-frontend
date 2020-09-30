import React from "react";
import feature from "../../Data/featureData";
import food from "../../Data/foodData";

const AddToDatabase = () => {
  const postData = (url, data) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container py-5 mt-5 text-center">
      <h3 className="text-center">Database Management</h3>
      <hr className="border border-danger" />
      <button
        onClick={() =>
          postData(
            "https://hot-onion-restaurant-server.herokuapp.com/addfeature",
            feature
          )
        }
        className="btn btn-secondary "
      >
        Add Feature
      </button>
      <button
        onClick={() =>
          postData(
            "https://hot-onion-restaurant-server.herokuapp.com/addfood",
            food
          )
        }
        className="btn btn-secondary px-4 "
      >
        Add Food
      </button>
    </div>
  );
};

export default AddToDatabase;
