import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../../logo/logo2.png";
import { useAuth } from "../Login/useAuth";

const Header = (props) => {
  const auth = useAuth();
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
              <span className="badge badge-light">{props.cart.length}</span>
            </Link>
          </li>
          <li className="nav-item">
            {auth.user ? (
              <Link className="nav-link text">{auth.user.displayName}</Link>
            ) : (
              <Link to="/login" className="nav-link text">
                Login
              </Link>
            )}
          </li>
          <li className="nav-item">
            {auth.user ? (
              <Link className="nav-link text">
                <button
                  onClick={() => auth.signOut()}
                  className="btn btn-rounded btn-danger"
                >
                  SignOut
                </button>
              </Link>
            ) : (
              <Link to="/login" className="nav-link text">
                <button className="btn btn-rounded btn-danger"> SignUp</button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
