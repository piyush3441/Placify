import React from "react";

import bannerImg from "../../assets/img/Image.jpg";


import { useGlobalContext } from "../../context/context";

import "./banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <section className="banner d-flex align-items-center ">
      {/* <div className="bubble-animation">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}

      {/* <div className="container">
        <br></br>
        <div className="row">
          <div className="col-md-6 ">
            <h2 className="theme-clr mb-3 fs-5">
              An investment in lnowledge pays the best interset
            </h2>
            <h1 className="mb-3 text-capitalize fs-3 fw-bold">
              best online platform for learning.
            </h1>
            <p className="mb-4 text-muted">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              nisi delectus a minus.
            </p>
            <Link to= "/login">
              <button type="button" className="theme-btn">
                Login / Signup
              </button>
            </Link>
          </div>
          <div className="col-md-6 order-first order-md-last mb-5 mb-md-0">
            <div className="circular-img">
              <img src={bannerImg} alt="banner img" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="home-main">

        <div className="home-content">
          <div className="home-heading7">
            <h1 className="home-heading7">
              The Solution to your every placement doubt
            </h1>
            <text className="home-caption6">
              Placify is your gateway to discover career opportunities and gain insights from senior students at your college.
            </text>
          </div>
        </div>
        <div>
          <img
            alt="image"
            src=  {bannerImg}
            className="home-image09"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
