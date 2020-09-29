import React, { useEffect, useState } from "react";
import SingleFeature from "../SingleFeature/SingleFeature";

const Feature = () => {
  const [feature, setFeature] = useState([]);
  useEffect(() => {
    fetch("https://hot-onion-restaurant-server.herokuapp.com/feature")
      .then((res) => res.json())
      .then((data) => setFeature(data))
      .catch((err) => console.log(err));
  }, [feature.length]);
  //console.log(feature);
  return (
    <section className="feature py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Why you choose us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas
              consequatur autem culpa accusamus delectus asperiores maxime eum
              aspernatur. Enim?
            </p>
          </div>
        </div>
        <div className="row text-center">
          {feature.map((feature) => (
            <SingleFeature key={feature.id} feature={feature}></SingleFeature>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
