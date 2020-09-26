import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner d-flex align-items-center text-center">
      <div className="container">
        <h1 className="banner-title">Best Food Waiting for your Belly</h1>
        <div className="search-box col-md-6 py-4 mx-auto">
          <input
            className="form-control"
            type="text"
            name="search"
            id="search"
            placeholder="Search Your Products.."
          />
          <Link>
            <button className="btn btn-danger search-btn">Search</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
