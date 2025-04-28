import React from "react";
import "./WebApps.css";
import PYTHON from "../imgs/PYTHON.png";
import LEETCODE from "../imgs/LeetCode_Logo_1.png";
import STATIC from "../imgs/static.png";
import RESPONSIVE from "../imgs/responsive.jpeg";
import DYNAMIC from "../imgs/dynamic.png";
import MACHINELEARNING from "../imgs/MACHINELEARNING.jpg";

const WebApps = () => {
  return (
    <div className="flex flex-wrap items-center justify-center w-4/5 text-white">
      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl " src={STATIC}></img>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 font-semibold">
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            HTML5
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            CSS3
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>Static Websites</h1>
        </div>
        <div className="p-2 ">
          <p>
            This GitHub repository highlights the static websites I've built
            using HTML5 and CSS3, showcasing my expertise in basic web design
            skills.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/static-websites.git">
            <button>Code</button>
          </a>
        </div>
      </div>

      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl " src={RESPONSIVE}></img>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 font-semibold">
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            HTML5
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            CSS3
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Bootstrap 4.5
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>Responsive Websites</h1>
        </div>
        <div className="p-2 ">
          <p>
            This GitHub repository highlights my expertise in creating
            responsive websites using HTML5, CSS3, and Bootstrap 4.5. It
            showcases the successful implementation of responsive design across
            various projects.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/responsive-websites.git">
            <button>Code</button>
          </a>
        </div>
      </div>

      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl " src={DYNAMIC}></img>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 font-semibold">
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            HTML5
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            CSS3
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Boostrap 4.5
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            JavaScript (ES6+)
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>Dynamic Websites</h1>
        </div>
        <div className="p-2 ">
          <p>
            This GitHub repository features dynamic websites I built using
            HTML5, CSS3, Bootstrap 4.5, and JavaScript (ES6+), showcasing my
            expertise in web design and adding interactive functionality.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/Dynamic-Websites.git">
            <button>Code</button>
          </a>
        </div>
      </div>

      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl " src={PYTHON}></img>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 font-semibold">
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Python
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Tkinter
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Pygame
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>Python Projects</h1>
        </div>
        <div className="p-2 ">
          <p>
            This GitHub repository showcases interactive projects built with
            Python, Tkinter and Pygame. Each project features engaging GUIs and
            game logic, highlighting my proficiency in Python and UI
            development. Check out these fun, functional applications!
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/Python-Projects.git">
            <button>Code</button>
          </a>
        </div>
      </div>

      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl " src={MACHINELEARNING}></img>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 font-semibold">
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Python
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Scikit-learn
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Streamlit
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>MACHINE LEARNING Projects</h1>
        </div>
        <div className="p-2 ">
          <p>
            This GitHub repository features machine learning projects built with
            Python, Scikit-learn, and Streamlit. Check out these insightful,
            data-driven models!
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/MachineLearning-Projects.git">
            <button>Code</button>
          </a>
        </div>
      </div>

      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl " src={LEETCODE}></img>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 font-semibold">
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Python
          </div>
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>LeetCode Problems</h1>
        </div>
        <div className="p-2 ">
          <p>
            This GitHub repository showcases all the problems I have
            successfully solved on LeetCode, demonstrating my proficiency in
            algorithmic problem-solving and coding skills.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/LeetCode-Problems.git">
            <button>Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebApps;
