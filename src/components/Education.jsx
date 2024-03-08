import React from "react";
import "./Education.css";
const Education = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="p-2 m-3 mt-20 text-5xl font-bold text-center text-white">
        Education
      </h1>
      <h2 className="w-4/5 m-3 mb-6 text-4xl text-center text-white">
        My education has been a journey of self-discovery and growth. My
        educational details are as follows.
      </h2>
      <section className="text-white timeline-section">
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2020-2024</div>
            <div className="timeline-content">
              <div className="flex justify-center gap-3">
                <img
                  className="bg-white rounded-2xl collegeLogo"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/JNTU_Hyderabad_logo.png/220px-JNTU_Hyderabad_logo.png"
                />
                <div>
                  <h1 className="text-left ">
                    JNTUH University College Of Engineering Manthani
                  </h1>
                  <h1 className="text-left">
                    Bachelor of Technology - BTech, Computer Science and
                    Engineering
                  </h1>
                  <h1 className="text-left">Dec 2020 - June 2024</h1>
                </div>
              </div>
              <div className="text-left">
                <h1 className="mt-3">Grade : 7.41 CGPA</h1>
                <p className="mt-2">
                  I am currently pursuing a Bachelor's degree in Computer
                  Science and Engineering at JNTUH UNIVERSITY COLLEGE OF
                  ENGINEERING MANTHANI, Peddapalli. I have completed 7 semesters
                  and have a CGPA of 7.41. I have taken courses in Data
                  Structures, Algorithms, Object-Oriented Programming, Database
                  Management Systems, Operating Systems, and Computer Networks,
                  among others.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2018-2020</div>
            <div className="timeline-content">
              <div className="flex items-center gap-3">
                <img
                  className="bg-white rounded-2xl collegeLogo"
                  src="https://d8it4huxumps7.cloudfront.net/images/partners/new_organisation_image-PU2WIeLVeN324337763ZnsqtuZj1b.png"
                />
                <div>
                  <h1 className="text-left ">SR Junior College</h1>
                  <h1 className="text-left">MPC</h1>
                  <h1 className="text-left">June 2018- April 2020</h1>
                </div>
              </div>
              <div className="text-left">
                <h1 className="mt-3">Grade : 95.9%</h1>
                <p className="mt-2">
                  I completed my class 12 high school education at SR Junior
                  College, Karimnagar, where I studied Science with Computer
                  Science.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2018</div>
            <div className="timeline-content">
              <div className="flex items-center gap-3 ">
                <img
                  className="bg-white rounded-2xl collegeLogo"
                  src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...GBrRdNnRrOwXs1M3EMoAJtlyAkgPZt9v86"
                />
                <div>
                  <h1 className="text-left ">
                    Sri Sai English Medium High School
                  </h1>
                  <h1 className="text-left"></h1>
                  <h1 className="text-left">2018</h1>
                </div>
              </div>
              <div className="text-left">
                <h1 className="mt-3">Grade : 9.7 CGPA</h1>
                <p className="mt-2">
                  I completed my class 10 education at Sri Sai English Medium
                  High School, Karimnagar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
