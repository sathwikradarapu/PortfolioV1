import React from "react";
import gitHubIcon from "../imgs/gTwo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar text-lg text-white">
      <ul className="navbarItems">
        <li className="p-2 m-3 font-semibold">
          <a href="#Home">Home</a>
        </li>
        <li className="p-2 m-3 font-semibold">
          <a href="#Skills">Skills</a>
        </li>
        <li className="p-2 m-3 font-semibold">
          <a href="#projects">Projects</a>
        </li>
        <li className="p-2 m-3 font-semibold">
          <a href="#Education">Education</a>
        </li>
        <li className="p-2 m-3 font-semibold">
          <a href="#POR">Positions of Responsibility</a>
        </li>
        <li className="p-2 m-3 font-semibold">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
