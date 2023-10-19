import React from "react";

import {
  DetailCurriculum,
  DetailDescription,
  DetailHeader,
  DetailInstructor,
  DetailReviews,
  DetailTabs,
} from "../components";

import { course } from "../assets/data/data";

const {
  info,
  details,
  chapters,
  description,
  creator,
  coments,
  rating,
} = course;



const SingleCourse = () => {
  return (
    <>
      {/* <Breadcrumb courses current="Javascript For Beginners" /> */}
      <section className="single-course mb-5">
        <br/>
        <br/>
        <div className="container box">
          <div className="row">
            <div className="col-lg-12">
              <div className="course-main">
                <div className="main-header">
                  <DetailHeader {...info} />
                </div>
                <div className="main-tabs my-4">
                  <DetailTabs />
                </div>
                <div className="main-tab-content box">
                  <div className="tab-content" id="nav-tabContent">
                    {/* course-curriculum start */}
                    <DetailDescription {...description} />
                    <DetailCurriculum chapters={chapters} />
                    {/* course-curriculum end */}
                    {/* course-description start */}
                    {/* course-description end */}
                    {/* course-instructor start */}
                    <DetailInstructor {...creator} />
                    {/* course-instructor end */}
                    {/* course-reviews start */}
                    <DetailReviews coments={coments} rating={rating} />
                    {/* course-reviews end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleCourse;
