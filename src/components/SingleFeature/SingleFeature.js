import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./SingleFeature.css";

const SingleFeature = (props) => {
  const { title, description, image, icon } = props.feature;
  const [buttonToggle, setButtonToggle] = useState(false);

  const showLess = () => {
    setButtonToggle(false);
  };
  const showMore = () => {
    setButtonToggle(true);
  };

  return (
    <div className="col-md-4 py-4 feature">
      <div className="card">
        <img src={image} alt="images" className="card-img-top image" />
      </div>
      <div className="card-body">
        <div className="d-flex">
          <img src={icon} alt="icon" className="icon" />
          <div className="feature-text">
            <h4 className="d-flex">{title}</h4>
            <p>{buttonToggle ? description : description.substr(0, 60)}</p>
            {buttonToggle === true ? (
              <span onClick={showLess} className="btn btn-collapse text-dark">
                See Less
                <FontAwesomeIcon
                  className="icon"
                  icon={faArrowAltCircleLeft}
                ></FontAwesomeIcon>
              </span>
            ) : (
              <span onClick={showMore} className=" btn btn-collapse text-dark">
                See More
                <FontAwesomeIcon
                  className="icon"
                  icon={faArrowAltCircleRight}
                ></FontAwesomeIcon>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
