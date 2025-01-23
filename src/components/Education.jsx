import React from "react";
import "./Education.css";
const Education = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="Education">
      <h1 className="p-2 m-3 mt-20 text-5xl font-bold text-center text-white">
        Education
      </h1>
      <h2 className="w-4/5 m-3 mb-6 text-4xl text-center text-white">
        My education has been a journey of self-discovery and personal growth.
        Here are the details of my educational background.
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
                    JNTUH University College Of Engineering Manthani, Telangana
                  </h1>
                  <h1 className="text-left">
                    B.Tech in Computer Science and Engineering in Artificial
                    Intelligence and Machine Learning.
                  </h1>
                  <h1 className="text-left">Nov 2020-Jun 2024</h1>
                </div>
              </div>
              <div className="text-left">
                <h1 className="mt-3">CGPA: 7.43/10.0</h1>
                <p className="mt-2">
                  I recently graduated from JNTUH University College of
                  Engineering, Manthani, specializing in Computer Science and
                  Engineering with a focus on Artificial Intelligence and
                  Machine Learning. My education has equipped me with a strong
                  proficiency in Python and MySQL, essential for developing AI
                  and ML applications. I am eager to apply my skills and
                  knowledge in practical settings, contributing to innovative
                  solutions in the field of technology.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022-2023</div>
            <div className="timeline-content">
              <div className="flex justify-center gap-3">
                <img
                  className="bg-white rounded-2xl collegeLogo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFDKcWIhUtBGaaNIRal9FJi-BTV_4q5MowMw&s"
                />
                <div>
                  <h1 className="text-left ">Nxtwave</h1>
                  <h1 className="text-left">Full Stack Development (MERN)</h1>
                  <h1 className="text-left">Sep 2023-Sep 2024</h1>
                </div>
              </div>
              <div className="text-left">
                <p className="mt-2">
                  At NxtWave's CCBP 4.0 Academy, I'm currently learning
                  full-stack development. In love with the coding challenges and
                  hands-on projects. With Industry's first ever IRC 4.0, getting
                  ready to take on new challenges in the tech world.
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
                  <h1 className="text-left ">
                    SR Junior College, Karimnagar, Telangana
                  </h1>
                  <h1 className="text-left">TSBIE (Class XII), MPC</h1>
                  <h1 className="text-left">Jun 2018-Mar 2020</h1>
                </div>
              </div>
              <div className="text-left">
                <h1 className="mt-3">Marks: 955/1000</h1>
                <p className="mt-2">
                  I completed my Class 12 education at SR Junior College,
                  Karimnagar, where I built a solid foundation in mathematics,
                  physics, and chemistry.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2017-2018</div>
            <div className="timeline-content">
              <div className="flex items-center gap-3 ">
                <img
                  className="bg-white rounded-2xl collegeLogo"
                  src="https://siddarthaschools.unicampus.in/images/partnerimages/siddharthahs/siddharthahsloginimage.png"
                />
                <div>
                  <h1 className="text-left ">
                    Siddartha High School, Karimnagar, Telangana
                  </h1>
                  <h1 className="text-left">TSBSE (Class X)</h1>
                  <h1 className="text-left">Jun 2017-Mar 2018</h1>
                </div>
              </div>
              <div className="text-left">
                <h1 className="mt-3">CGPA: 9.8/10.0</h1>
                <p className="mt-2">
                  I completed my class 10 education at Siddartha High School,
                  Karimnagar, Telangana. I was actively involved in school
                  activities, particularly as a player in volleyball and kabaddi
                  under the School Game Federations.
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
