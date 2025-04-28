import React from "react";
import "./Projects.css";
import WebApps from "./WebApps";
const Projects = () => {
  return (
    <div className="flex flex-col text-white " id="projects">
      <div className="flex flex-col items-center justify-center projectsTitle">
        <h1 className="p-2 m-3 mt-20 text-5xl font-bold">Projects</h1>
        <h1 className="m-3 mb-6 text-4xl text-center">
          Here are some projects I have worked on over the past year.
        </h1>
      </div>
      <div className="flex flex-col projectsList">
        {/* <div className="flex justify-center text-2xl buttonsDiv">
          <Link to="/WebApps">
            <button className=""> Web Apps</button>
          </Link>
          <Link to="/AndroidApps">
            <button>Android Apps</button>
          </Link>
          <Link to="/Others">
            <button>Others</button>
          </Link>
        </div> */}
        <div className="flex flex-wrap items-center justify-center allprojectsList">
          {/* <Routes>
            <Route path="/WebApps" exact Component={WebApps} />
            <Route path="/AndroidApps" exact Component={AndroidApps} />
            <Route path="/Others" exact Component={Others} />
          </Routes> */}
          <WebApps />
        </div>
      </div>
    </div>
  );
};

export default Projects;
