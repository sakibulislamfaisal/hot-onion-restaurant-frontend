import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodDetail = (props) => {
  const [singleFoodDetail, setSingleFoodDetail] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://hot-onion-restaurant-server.herokuapp.com/foods/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleFoodDetail(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(singleFoodDetail);
  return (
    <div className="food-detail py-5 my-5">
      <div className="row">
        <div className="col-md-6 py-5 ">
          <h1>{singleFoodDetail.title}</h1>
          <p>{singleFoodDetail.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
