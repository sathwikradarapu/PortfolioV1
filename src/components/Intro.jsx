import React from "react";
import "./Intro.css";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <div className="text-white intro" id="Home">
      <h1 className="m-2 text-3xl font-bold md:text-6xl">👋🙋‍♂️ Hi</h1>
      <h1 className="m-2 text-3xl font-bold md:text-6xl">
        I’m Sathwik Radarapu...
      </h1>
      <div className="role">
        <ul className="rolesList">
          <li className="m-2 text-2xl font-bold md:text-6xl">
            <span className="typing">
              <TypeAnimation
                sequence={[
                  "💻⌨️ Full Stack Python Developer",
                  1000, // wait 1 second
                  "", // delete the text
                  500, // wait 0.5 second before typing again
                ]}
                wrapper="span"
                speed={40}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
