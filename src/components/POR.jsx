import React from "react";
import "./POR.css";
const POR = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="POR">
      <h1 className="p-2 m-3 mt-20 text-5xl font-bold text-center text-white">
        Experience
      </h1>
      <h2 className="w-4/5 m-3 mb-6 text-4xl text-center text-white">
        These experiences as a student, while taking on various roles, have
        significantly enhanced my skills and accelerated my learning.
      </h2>
      <section className="text-white timeline-section">
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2025</div>
            <div className="timeline-content">
              <div className="flex justify-center gap-3">
                <img
                  className="bg-white rounded-2xl collegeLogo"
                  src="https://logosandtypes.com/wp-content/uploads/2022/03/Cognizant.png"
                />
                <div>
                  <h1 className="text-left ">Cognizant</h1>
                  <h1 className="text-left">Programmer Analyst Trainee</h1>
                  <h1 className="text-left">May 2025 - Dec 2025</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023</div>
            <div className="timeline-content">
              <div className="flex items-center gap-3">
                <img
                  className="bg-white rounded-2xl collegeLogo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFDKcWIhUtBGaaNIRal9FJi-BTV_4q5MowMw&s"
                />
                <div>
                  <h1 className="text-left ">Nxtwave</h1>
                  <h1 className="text-left ">
                    Teaching Assistant
                    <span className="taportal">
                      <a href="https://portal.ccbp.in/teaching-assistant-profile?uid=sathwik">
                        Dashboard
                      </a>
                    </span>
                  </h1>
                  <h1 className="text-left">Mar 2023-Jul 2023</h1>
                </div>
              </div>
              <div className="text-left">
                <p className="mt-2">
                  Addressed doubts and foster a supportive learning environment.
                  Solved over 370 problems to sharpen problem-solving skills.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023</div>
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
                  <h1 className="text-left">Technical Coordinator</h1>
                  <h1 className="text-left">Apr 2023-May 2023</h1>
                </div>
              </div>
              <div className="text-left">
                <p className="mt-2">
                  Created and implemented three projects: Robotic Arm, Hand
                  Gesture Volume Control, and Diabetic Detection Website.
                  Conducted coding competitions, fostering coding skills and
                  awareness among juniors, and aided 15 students in project
                  presentations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default POR;
