import React from "react";
import { Link } from "react-router-dom";

import './signup.css'

const SignUp = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <div className="box">
              <h2 className="text-center fs-4 mb-5 fw-bold">Sign Up</h2>
              <form>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <select
                    type="number"
                    placeholder="Batch"
                    className="form-control"
                  >
                    <option selected>Select your Course</option>
                    <option value="1">B.Tech</option>
                    <option value="2">B.Des</option>
                    <option value="3">BBA</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <input
                    type="number"
                    placeholder="Batch"
                    className="form-control"
                  />
                </div>
                <button type="submit" className="w-100 my-4" id="signup-btn">
                  Sign Up
                </button>
                <p className="text-center">
                  Already have an account?<Link to="/login"> Log In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
