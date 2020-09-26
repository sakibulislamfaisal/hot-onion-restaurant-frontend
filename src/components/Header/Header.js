import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../../logo/logo2.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white fixed-top py-2 ">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="red onion logo" />
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link">
              <FontAwesomeIcon
                className="icon-header"
                icon={faShoppingCart}
              ></FontAwesomeIcon>
              <span className="badge badge-light"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
