import React from "react";
import "./WebApps.css";
import IPLVICTORY from "../imgs/iplvictory.png";
import STROKERISK from "../imgs/strokerisk.jpg";
import TODOLIST from "../imgs/Todolist.jpeg";
import VRPRODUCTS from "../imgs/VR Products.jpg";
import LOGO from "../imgs/logo.png";
import LEETCODE from "../imgs/LeetCode_Logo_1.png";
import STATIC from "../imgs/static.png";
import RESPONSIVE from "../imgs/responsive.jpeg";
import DYNAMIC from "../imgs/dynamic.png";

const WebApps = () => {
  return (
    <div className="flex flex-wrap items-center justify-center w-4/5 text-white">
      {/* card1 */}
      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl cardHeight">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl" src={IPLVICTORY}></img>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 font-semibold">
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Python
          </div>
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Jupyter Notebook
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Streamlit
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Pandas
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>IPL Victory Probability Estimator</h1>
        </div>
        <div className="p-2 ">
          <p>
            This project aims to develop a predictive model to forecast IPL
            match outcomes based on historical data using Python. The analysis
            will involve data manipulation with pandas, model saving with
            pickle, and an interactive web app built with Streamlit for user
            input and predictions.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/IPL-Victory-Probability-Estimator.git">
            {" "}
            <button>Code</button>
          </a>
        </div>
      </div>
      {/* card1 end */}
      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl cardHeight">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl" src={LOGO}></img>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 font-semibold">
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            React
          </div>
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Redux
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>Trend Rush</h1>
        </div>
        <div className="p-2 ">
          <p>
            This project is an e-commerce clone resembling Amazon and Flipkart,
            built with React for the UI and Redux for state management. It
            features sections like Men, Women, Kids, Beauty, and a special Bag
            section where users can add or remove items, with a bill generated
            dynamically.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/Shopping-Website-Frontend.git">
            {" "}
            <button>Code1</button>
          </a>
          <a href="https://github.com/sathwikradarapu/Shopping-Website-Backend.git">
            {" "}
            <button>Code2</button>
          </a>
          <a href="https://trendrush.netlify.app/">
            {" "}
            <button>Live</button>
          </a>
        </div>
      </div>
      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl" src={TODOLIST}></img>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 font-semibold">
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Django
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>Collaborative Task Manager</h1>
        </div>
        <div className="p-2 ">
          <p>
            Built a Task List app using Django MVT with CRUD operations and
            database management.Designed UI with Jinja2 templates, Django forms,
            and CSRF security. Configured Admin Panel with superuser for
            efficient database control.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/Django-TodoList.git">
            {" "}
            <button>Code</button>
          </a>
        </div>
      </div>

      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl" src={STROKERISK}></img>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 font-semibold">
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Python
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Jupyter Notebook
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Streamlit
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Pandas
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>ML Based Stroke Risk Prediction</h1>
        </div>
        <div className="p-2 ">
          <p>
            This project develops a predictive model for early heart disease
            diagnosis using the UCI Heart Disease dataset. It leverages Python
            libraries (NumPy, Pandas) and logistic regression to improve
            healthcare outcomes.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/ML-Based-Stroke-Risk-Prediction.git">
            {" "}
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

      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl " src={STATIC}></img>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 font-semibold">
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            HTML
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            CSS
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>Static Websites</h1>
        </div>
        <div className="p-2 ">
          <p>
            This GitHub repository highlights the static websites I've built
            using HTML and CSS, showcasing my expertise in basic web design
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
            HTML
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            CSS
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Bootstrap
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>Responsive Websites</h1>
        </div>
        <div className="p-2 ">
          <p>
            This GitHub repository highlights my expertise in creating
            responsive websites using HTML, CSS, and Bootstrap. It showcases the
            successful implementation of responsive design across various
            projects.
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
            HTML
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            CSS
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Boostrap
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            JavaScript
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>Dynamic Websites</h1>
        </div>
        <div className="p-2 ">
          <p>
            This GitHub repository features dynamic websites I built using HTML,
            CSS, Bootstrap, and JavaScript, showcasing my expertise in web
            design and adding interactive functionality.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/Dynamic-Websites.git">
            <button>Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebApps;
