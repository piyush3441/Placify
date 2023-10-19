import React from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../context/context";
import logo from "../../assets/img/1-500h.png";
import "./navbar.css";

const Navbar = () => {

  return (
    // <header className="header py-2">
    //   <div
    //     className={`header-backdrop ${isSidebar ? "active" : null}`}
    //     onClick={closeSidebar}
    //   ></div>
    //   <nav className="navbar p-0">
    //     <div className="container d-flex justify-content-between ">
    //       <div className="navbar-brand">
    //         <Link to="/" className=" text-uppercase fs-3 fw-bold">
    //           <img src={logo} style={{ height: "40%", width: "40%" }}></img>
    //         </Link>
    //       </div>
    //       <button
    //         onClick={openSidebar}
    //         type="button"
    //         className="navbar-togglre d-lg-none fs-1"
    //       >
    //         <i className="fa fa-bars"></i>
    //       </button>
    //       <div
    //         className={`navbar-nav-container py-3 py-lg-0 ${isSidebar ? "active" : null
    //           } `}
    //       >
    //         {/* <button
    //           className="header-close-btn d-lg-none theme-bg fs-3 rounded-1 mx-3 mx-lg-0 mb-3 mb-lg-0 "
    //           onClick={closeSidebar}
    //           type="button"
    //         >
    //           <i className="fa fa-times"></i>
    //         </button> */}



    //         <ul className="navbar-nav d-flex flex-lg-row flex-column align-lg-items-center fs-5">
    //           <li className="nav-item me-5 ">
    //             <Link
    //               onClick={closeSidebar}
    //               className="nav-link  px-3 px-lg-0"
    //               to="/"
    //             >
    //               Home
    //             </Link>
    //           </li>
    //           <li className="nav-item me-5 ">
    //             <Link
    //               onClick={closeSidebar}
    //               className="nav-link px-3 px-lg-0"
    //               to="/"
    //             >
    //               TPO
    //             </Link>
    //           </li>


    //           <li className="nav-item me-5 ">

    //             <Link to="/login">
    //               <button type="button" className="theme-btn">
    //                 Login / Signup
    //               </button>
    //             </Link>
    //           </li>



    //           <li className="nav-item ">
    //             <Link
    //               onClick={closeSidebar}
    //               className="nav-link px-3 px-lg-0"
    //               to="/"
    //             >
    //               Contact
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
    <header data-thq="thq-navbar" className="home-navbar">
      <Link to="/" className="home-navlink">
        <img alt="image" src={logo} className="home-logo" />
      </Link>
      <div data-thq="thq-navbar-btn-group" className="home-right"></div>

      <Link to="/" className="home-link">
        Home
      </Link>
      <Link to="/" className="home-link" onClick={() => scrollToSection(TPO)}>
        TPO
      </Link>
      <Link to="/" className="home-link" onClick={() => scrollToSection(contactUS)}>
        Contact Us
      </Link>

      <Link to="/login">
        <button id="theme-button">
          Login / Signup
        </button>
      </Link>
    </header>
  );
};

export default Navbar;
