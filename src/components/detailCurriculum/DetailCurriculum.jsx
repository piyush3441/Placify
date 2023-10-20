import React from "react";

import "./detailCurriculum.css";

const DetailCurriculum = ({ chapters }) => {
  return (
    <div
      className="tab-pane fade show active"
      id="course-curriculum"
      role="tabpanel"
      aria-labelledby="course-curriculum-tab"
    >
      <div className="course-curriculum">
        <h4 className="mb-4">Interview Experience</h4>
        {/* accardion start */}
        <div className="accordion" id="accordion">
          {chapters.map((chapter) => (
            <div className="accordion-item" key={chapter.id}>
              <h2 className="accordion-header" id={`heading-${chapter.id}`}>
                <button
                  type="button"
                  className={
                    chapter.id === 1
                      ? "accordion-button "
                      : "accordion-button collapsed "
                  }
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${chapter.id}`}
                  aria-expanded="false"
                  aria-controls={`collapse-${chapter.id}`}
                >
                  <div className="w-100 d-flex flex-column flex-md-row align-md-items-center justify-content-between">
                    <div className="chapter-name fs-5 mb-2 mb-md-0">
                      <span>{chapter.title}</span>
                    </div>
                    <div className="chapter-info me-2">
                      {/* <span className="mb-1 mb-md-0 fs-6 ">
                        {chapter.total_parts} lessons
                      </span>
                      <span className="theme-clr mx-1">\</span>
                      <span>{chapter.total_time}</span> */}
                      <span>Btech 4th year</span>
                    </div>
                  </div>
                </button>
              </h2>
              <div
                // id={`collapse-${chapter.id}`}
                // className={
                //   chapter.id === 1
                //     ? "accordion-collapse collapse show"
                //     : "accordion-collapse collapse "
                // }
                // aria-labelledby={`heading-${chapter.id}`}
                // data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  {/* <ul>
                    {chapter.parts.map((part, index) => (
                      <li key={index} className="my-2">
                        <div className="d-flex justify-content-between">
                          <button type="button">
                            <i className="fas fa-play me-2 theme-clr"></i>
                            {part.sub_title}
                          </button>
                          <span>{part.time}</span>
                        </div>
                      </li>
                    ))}
                  </ul> */}

                  Hughes Systique visited my college ABES Engineering College on 5th July.

                  Round 1(Online Test): It was an online test on HackerRank Platform. It comprises of 3 sections:

                  Aptitude - 20 MCQs
                  Computer Concepts - 20 MCQs
                  Programming - 2 questions
                  The level of questions was Easy-Medium.

                  Round 2(Technical Interview Round-1):

                  Tell me about yourself
                  Your favorite subjects: I answered OS, DBMS and DSA
                  Operating Systems
                  What is Deadlock
                  Techniques to handle deadlock with examples
                  DBMS
                  What is Normalization and Denormalization
                  Types of Normal forms
                  Types of Languages(DDL, DML, DCL)
                  DSA
                  Types of Sorting, their procedure and complexities
                  Implement queue using linked list(code)
                  Types of Algorithms you have done
                  C/C++
                  Difference in call by value and call by reference using swap example
                  Difference in malloc() and calloc()
                  2-3 questions were based on projects I have done

                  Round 3(Technical Interview Round-2 + HR):

                  In my introduction I mentioned about PWAs. So a 15 minutes discussion on PWAs.
                  Then a detailed 25-30 minutes discussion on all my projects like questions related to tech stack, database models etc.
                  At last 1 HR question: Where do you see yourself after 3 years?
                  Tips: You should know each and every word of your Resume. Whole interview will revolve around it only.


                </div>
              </div>
            </div>
          ))}
        </div>
        {/* accardion end */}
      </div>
    </div>
  );
};

export default DetailCurriculum;
