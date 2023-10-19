import React from "react";
import "./detailHeader.css";

import HSC from "../../assets/img/Hughes_Systique_Corporation_logo.png"

const DetailHeader = () => {
  return (
    <div className="d-flex justify-content-left">
      <img src= {HSC} style={{height : "100px" , width : "100px"}}>
      </img>
      <h2 className="text-capitalize mb-3">Hughes Systique Corporation</h2>
      {/* <div className="header-rating d-flex mb-1 ">

        <span className="me-1">({stars_average})</span>
        <span className="ms-1">({reviews} Reviews)</span>
      </div> */}
      {/* <p className="mb-1">Enrolled Students - {students}</p>
      <p className="mb-1">
        Created By - <span className="theme-clr">{creator_name}</span>
      </p>
      <p className="mb-1">Last Updated - {last_Update}</p>
      <p>Language - {language}</p> */}
    </div>
  );
};

export default DetailHeader;  
