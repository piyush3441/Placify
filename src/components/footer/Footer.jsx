import React from "react";
import { Link } from "react-router-dom";


import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-contact col-12 py-3 ">
            <div className="row justify-content-between ">
              <div className="col-md-4 d-flex">
                <div className="contact-icon pe-3">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h6>+91 94608-68085</h6>
                  <p>Mon-Fri 9am-6pm</p>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="contact-icon pe-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h6>info@jklu.com</h6>
                  <p>Online support</p>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="contact-icon pe-3">
                  <i className="fa fa-map"></i>
                </div>
                <div className="contact-text">
                  <h6>JKLU, Mahapura</h6>
                  <p>Jaipur Rajasthan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-social col-12 py-3">
            <div className="row justify-content-center box rounded-0">
              {/* <div className="col-8 ">
                <div className="row ">
                  <div className="col-12 col-md-6 text-center">
                    <p>Social Media</p>
                  </div>
                  <div className="col-12 col-md-6 d-flex justify-content-center align-items-baseline ">
                    <div className="social-icon me-2">
                      <i className="fab fa-facebook"></i>
                    </div>
                    <div className="social-icon me-2">
                      <i className="fab fa-twitter"></i>
                    </div>
                    <div className="social-icon me-2">
                      <i className="fab fa-linkedin"></i>
                    </div>
                    <div className="social-icon me-2">
                      <i className="fab fa-github"></i>
                    </div>
                    <div className="social-icon me-2">
                      <i className="fab fa-instagram"></i>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="col-md-6">
                <div className="contact-form">
                  <h2 className="text-center fs-4 fw-bold mb-5">Contact Us</h2>
                  <form>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="number"
                        placeholder="Phone"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <textarea
                        placeholder="Message"
                        className="form-control"
                      ></textarea>
                    </div>
                    <button type="submit" className="theme-btn w-100">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="footer-links col-12 py-3">
            <div className="row">
              <div className="links-pages  col-sm-6">
                <h3>
                  <Link to="/" className=" text-uppercase fs-3 fw-bold">
                    <span>lrn</span>plus
                  </Link>
                </h3>
                <ul className="navbar-nav ">
                  <li className="nav-item  ">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item  ">
                    <Link className="nav-link" to="/courses">
                      Courses
                    </Link>
                  </li>
                  <li className="nav-item  ">
                    <Link className="nav-link" to="/singlecourse">
                      Single Course
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="signup" className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/login" className="nav-link">
                      Log In
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="links-info  col-sm-6 mt-4 mt-sm-0">
                <h3>learn plus</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae natus labore laudantium esse accusantium corporis
                  delectus rem nam corrupti ipsa velit culpa sint veniam
                  dignissimos incidunt itaque maiores, sed laborum odio iure.
                  Illum veniam eius dolorem nisi delectus atque, aliquam facilis
                  debitis earum illo modi temporibus officiis eveniet ullam
                  omnis quia{" "}
                </p>
              </div>
            </div>
          </div> */}
          <div className="footer-copyright col-12 text-center py-3 ">
            <p>
              &copy;{new Date().getFullYear()} by
              <a href="https://github.com/piyush3441"> Piyush Solanki</a>, All
              rights reserved
            </p>
          </div>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
