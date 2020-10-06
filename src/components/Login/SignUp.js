import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../logo/logo2.png";
import "./SignUp.css";
import { useAuth } from "./useAuth";

const SignUp = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useState(false);
  const auth = useAuth();
  const onSubmit = (data, e) => {
    e.preventDefault();
    if (loggedInUser === true) {
      if (data.email && data.password) {
        auth.signIn(data.email, data.password);
      }
    } else {
      if (data.name && data.email && data.password && data.confirm_password) {
        auth.signUp(data.email, data.confirm_password, data.name);
      }
    }
  };

  return (
    <div className="signup ">
      <div className="container">
        <div className="logo text-center">
          <Link to="/">
            <img src={logo} alt="red onion" />
          </Link>
        </div>
        {loggedInUser ? (
          <form onSubmit={handleSubmit(onSubmit)} className="py-3">
            <h4 className="text-center">Login Panel</h4>
            {auth.user != null && (
              <p className="text-danger error">{auth.user.error}</p>
            )}

            <div className="form-group">
              <input
                name="email"
                ref={register({ required: true })}
                className="form-control"
                placeholder="Enter Your Email"
              />
              {errors.email && <span className="error">Email is required</span>}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                ref={register({ required: true })}
                className="form-control"
                placeholder="Enter Your Password"
              />
              {errors.password && (
                <span className="error">Password is required</span>
              )}
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-danger btn-block sign-btn"
              >
                Sign In
              </button>
            </div>
            <div className="account text-center">
              <label onClick={() => setLoggedInUser(false)}>
                Create a new Account
              </label>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="py-3">
            <h4 className="text-center">New Account</h4>
            {auth.user != null && (
              <p className="text-danger error">{auth.user.error}</p>
            )}
            <div className="form-group">
              <input
                name="name"
                ref={register({ required: true })}
                className="form-control"
                placeholder="Enter Your Name"
              />
              {errors.name && <span className="error">Name is required</span>}
            </div>
            <div className="form-group">
              <input
                name="email"
                ref={register({ required: true })}
                className="form-control"
                placeholder="Enter Your Email"
              />
              {errors.email && <span className="error">Email is required</span>}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                ref={register({ required: true })}
                className="form-control"
                placeholder="Enter Your Password"
              />
              {errors.password && (
                <span className="error">Password is required</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirm_password"
                ref={register({
                  validate: (value) => value === watch("password"),
                  required: true,
                })}
                className="form-control"
                placeholder="Enter Your Confirm Password"
              />
              {errors.confirm_password && (
                <span className="error">Confirm Password is required</span>
              )}
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-danger btn-block sign-btn"
              >
                Sign Up
              </button>
            </div>
            <div className="account text-center">
              <label onClick={() => setLoggedInUser(true)}>
                Already Have an Account
              </label>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
