import React from "react";
import "./Container.css";
import NavBar from "./NavBar";
import Intro from "./Intro";
const Container = () => {
  return (
    <div className="h-screen cont">
      <NavBar />
      <Intro />
    </div>
  );
};

export default Container;
