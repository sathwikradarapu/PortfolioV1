import React from "react";
import "./Intro.css";
import { TypeAnimation } from "react-type-animation";
const Intro = () => {
  return (
    <div className="text-white  intro">
      <h1 className="m-2 text-3xl font-bold md:text-6xl">Hi </h1>
      <h1 className="m-2 text-3xl font-bold md:text-6xl ">
        I'm Sai Prakash Sunkari{" "}
      </h1>
      <div className="role">
        <ul className="rolesList">
          <li className="m-2 text-2xl font-bold md:text-6xl">
            <span className="typing">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Web Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Android Developer",
                  1000,
                ]}
                wrapper="span"
                speed={40}
                style={{ fontSize: "", display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </li>
        </ul>
      </div>
      <p className="w-1/2 m-2 text-xs md:text-xl ">
        {" "}
        Transforming visions into interactive realities through pixel-perfect
        designs and intuitive user experiences
      </p>
      <button className="w-32 p-4 m-2 text-xs font-semibold text-center text-white transition ease-in-out border-white shadow-6xl rounded-2xl hover:bg-neutral-800 md:text-2xl ">
        Resume
      </button>
    </div>
  );
};

export default Intro;
