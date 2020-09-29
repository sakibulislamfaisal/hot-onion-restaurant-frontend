import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo/logo2.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer py-5 text-danger bg-dark text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 footer-img ">
            <Link to="/">
              <img src={logo} alt="hot-onion-restaurant" />
            </Link>
          </div>
          <div className="col-md-3 py-5 mt-4 footer-text">
            <nav>
              <Link to="/about" className="footer-text-title">
                About Online Food
              </Link>
              <br />
              <Link to="/blog" className="footer-text-title">
                Read Our Blog
              </Link>
              <br />
              <Link to="/login" className="footer-text-title">
                Sign Up To Deliver
              </Link>
              <br />
              <Link to="/" className="footer-text-title">
                Add Your Restaurant
              </Link>
              <br />
            </nav>
          </div>
          <div className="col-md-3 footer-text py-5 mt-4">
            <nav>
              <Link to="/help" className="footer-text-title">
                Get Help
              </Link>
              <br />
              <Link to="/faq" className="footer-text-title">
                Read FAQ
              </Link>
              <br />
              <Link to="/city" className="footer-text-title">
                View All Cities
              </Link>
              <br />
              <Link to="/" className="footer-text-title">
                Restaurant Near Me
              </Link>
            </nav>
          </div>
        </div>
        <p className="text-center text-light mt-4 mb-0">
          Copyright &copy; 2020 Hot Onion Restaurant
        </p>
        <strong className="text-light mb-0 name">
          Design By : Foyshal Rahman
        </strong>
      </div>
    </div>
  );
};

export default Footer;
