import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="text-danger text ">
          <h2>Page Not Found</h2>
          <Link to="/">
            <div className="btn btn-danger btn-md home">Back to Home Page</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
