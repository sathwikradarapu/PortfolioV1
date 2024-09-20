import React from "react";
import "./Intro.css";
import { TypeAnimation } from "react-type-animation";
const Intro = () => {
  return (
    <div className="text-white intro" id="Home">
      <h1 className="m-2 text-3xl font-bold md:text-6xl">Hi </h1>
      <h1 className="m-2 text-3xl font-bold md:text-6xl ">
        I'm Sathwik Radarapu{" "}
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
                  "Software Developer",
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
        Enthusiastic about advancing software development through innovation. Actively seeking dynamic opportunities in software development.
      </p>
      <a
        href="https://drive.google.com/file/d/19p3SQRfMUMX0b2mIL-QKjrBgZMXwGKFu/view?usp=sharing"
        target="_blank"
      >
        <button className="w-32 p-4 m-2 text-xs font-semibold text-center text-white transition ease-in-out border-white shadow-6xl rounded-2xl hover:bg-neutral-800 md:text-2xl ">
          Resume
        </button>
      </a>
    </div>
  );
};

export default Intro;
