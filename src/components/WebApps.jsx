import React from "react";
import pfBg from "../imgs/pfBg.jpg";
import "./WebApps.css";
import IPLVICTORY from "../imgs/iplvictory.png";
import STROKERISK from "../imgs/strokerisk.jpg"
import TODOLIST from "../imgs/Todolist.jpeg"
import VRPRODUCTS from "../imgs/VR Products.jpg"
import CALCULATOR from "../imgs/calculator.jpg"
import WIKIPEDIA from "../imgs/wikipedia.jpg"
import FOODMUNCH from "../imgs/foodmunch.jpg"
import FLYBUY from "../imgs/flybuy.jpg"

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
          This project aims to develop a predictive model to forecast IPL match outcomes based on historical data using
          Python. The analysis will involve data manipulation with pandas, model saving with pickle, and an interactive
          web app built with Streamlit for user input and predictions.
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
      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl" src={STROKERISK}></img>
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
          </div>
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>ML-Based Stroke Risk Prediction</h1>
        </div>
        <div className="p-2 ">
          <p>
         It involves data analysis with Python libraries (numpy, pandas), and logistic regression to predict heart
          disease presence, enhancing patient outcomes and healthcare efficiency.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/ML-Based-Stroke-Risk-Prediction.git">
            <button>Code</button>
          </a>
        </div>
      </div>
      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl" src={TODOLIST}></img>
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
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Javascript
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>TodoList App</h1>
        </div>
        <div className="p-2 ">
          <p>
          This application uses HTML, CSS, Bootstrap, and JavaScript to manage tasks. Users can input tasks, which are
          added to a list with checkboxes for marking completion and delete icons for removal. A save button stores the
          tasks in local storage, ensuring they persist across page refreshes.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/TodoList.git">
            {" "}
            <button>Code</button>
          </a>
          <a href="https://sathwiktodo.ccbp.tech/">
            <button onClick="">Live</button>
          </a>
        </div>
      </div>
      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl" src={VRPRODUCTS}></img>
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
          <h1>VR Products Website</h1>
        </div>
        <div className="p-2 ">
          <p>
          This website, designed with HTML, CSS, and Bootstrap, provides comprehensive details on virtual reality
          products. It features a navigation bar with sections for Home, Features, Kit, Kit Description, Price, and Contact,
          allowing easy access to various parts of the site.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/VR-Products-Website.git">
            {" "}
            <button>Code</button>
          </a>
          <a href="https://vrsathwik.ccbp.tech/">
            <button onClick="">Live</button>
          </a>
        </div>
      </div>
      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl" src={WIKIPEDIA}></img>
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
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            JavaScript
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>Wikipedia Search App</h1>
        </div>
        <div className="p-2 ">
          <p>
          It takes user input and uses JavaScript HTTP methods like GET, PUT, POST, and DELETE to send requests to the Wikipedia database. The results are retrieved as links, which are then displayed on the website. When a user clicks on a link, they are redirected directly to the main Wikipedia site.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/Wikipedia-Search-App.git">
            {" "}
            <button>Code</button>
          </a>
          <a href="https://sathwiksearch.ccbp.tech/">
            <button onClick="">Live</button>
          </a>
        </div>
      </div>
      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl" src={CALCULATOR}></img>
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
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            JavaScript
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>Calculator</h1>
        </div>
        <div className="p-2 ">
          <p>
          A simple calculator is designed using HTML, CSS, and Bootstrap for the layout. JavaScript is used to add functionality to each button, allowing operations like addition, subtraction, multiplication, and more.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/Calculator.git">
            {" "}
            <button>Code</button>
          </a>
          <a href="https://lgmvipcalc.ccbp.tech/">
            <button onClick="">Live</button>
          </a>
        </div>
      </div>
      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl" src={FLYBUY}></img>
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
          <h1>Fly Buy</h1>
        </div>
        <div className="p-2 ">
          <p>
          It's a clone of an e-commerce website specializing in electronic gadgets. Users can easily explore various sections of the site through a navigation bar built with Bootstrap, which contains multiple navigation items for seamless browsing.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/Fly-Buy.git">
            {" "}
            <button>Code</button>
          </a>
          <a href="https://flybuy1s.ccbp.tech/">
            <button onClick="">Live</button>
          </a>
        </div>
      </div>
      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl" src={FOODMUNCH}></img>
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
          <h1>Food Munch</h1>
        </div>
        <div className="p-2 ">
          <p>
          This project is a clone of a food ordering website. Users can easily navigate through various sections using a Bootstrap-based navigation bar, which includes items such as 'Menu,' 'Delivery & Payment,' 'Why Choose Us,' and more.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/sathwikradarapu/Food-Munch.git">
            {" "}
            <button>Code</button>
          </a>
          <a href="https://sathwikfood.ccbp.tech/">
            <button onClick="">Live</button>
          </a>
        </div>
      </div>






    </div>
  );
};

export default WebApps;
