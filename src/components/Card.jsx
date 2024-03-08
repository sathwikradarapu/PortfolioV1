import React from "react";
import pfBg from "../imgs/pfBg.jpg";
import "./Card.css";
const Card = () => {
  return (
    <div className="flex flex-col p-2 m-2 text-white border border-white card rounded-2xl">
      <div className="imgDiv h-2/4 ">
        <img className="p-2 rounded-2xl" src={pfBg}></img>
      </div>
      <div className="flex flex-wrap p-2 ">
        <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
          React JS
        </div>
      </div>
      <div className="p-2 text-2xl font-semibold ">
        <h1>LoduProject</h1>
      </div>
      <div className="p-2 ">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
      </div>
      <div className="flex items-center justify-center buttonsDiv">
        <button>Code</button>
        <button>Live</button>
      </div>
    </div>
  );
};

export default Card;
