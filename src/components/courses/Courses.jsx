import React from "react";
import { Link } from "react-router-dom";

import { CourseCard, Title } from "..";
import { courses } from "../../assets/data/data";
import "./courses.css";

// import Slider from "react-slick";


// const settings = {
//   arrows: false,
//   infinite: false,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   autoplay: true,
// };

const Courses = () => {
  return (
    <section className="courses">
      <div className="container">
        <Title title="Companies" />
        <br />
        <div className="row gx-4 gy-5">

          {/* <Slider {...settings}> */}
          {courses
            .filter((item) => item.category === "web")
            .map((item) => (
              <CourseCard {...item} key={item.id} />
            ))}
          {/* </Slider> */}
        </div>
        <div className="row">
          <div className="col-12 text-center mt-5">
            <Link to="/login">
              <button id="view-button">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
