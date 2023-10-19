import React from "react";


import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-social col-12 py-3">
            <div className="row justify-content-center box rounded-0">

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
          <hr/>
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
                  <i className="fa fa-location-dot"  aria-hidden="true"></i>
                </div>
                <div className="contact-text">
                  <h6>JKLU, Mahapura</h6>
                  <p>Jaipur Rajasthan</p>
                </div>
              </div>
            </div>
          </div>
          <hr/>
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
