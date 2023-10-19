import React from "react";
import instructor1 from "../../assets/img/doctor-1-300w.png"
import instructor2 from "../../assets/img/doctor-2-300w.png"

import "./instructor.css";

const officers = [
  {
    id: 1,
    name: "Mr. Shounak Biswas",
    img_src: instructor1,
    text: "working at placement cell of jklu since a long time and building the future of many students"
  },
  {
    id: 2,
    name: "Mr. Anil K. Sharma",
    img_src: instructor2,
    text: "working at placement cell of jklu for nice short time and building the future of many students"
  }
]

const Instructor = () => {
  return (
    <section className="meet-meet">
        <div className="meet-heading">
          <h2 className="meet-text">Training and Placement Cell</h2>
        </div>
        <div className="meet-list">
          <div className="meet-controls"></div>
          <div data-teleport="doctors" className="meet-doctors">

            {officers.map((item) => {
              return (
                <div className="doctor-doctor">
                  <img
                    src={item.img_src}
                    className="doctor-image"
                  />
                  <div className="doctor-heading">
                    <h2 className="doctor-text">{item.name}</h2>
                    <p className="doctor-text1">{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
  );
};

export default Instructor;
