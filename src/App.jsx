import React from "react";
import "./App.css";
import Container from "./components/Container";

import Skills from "./components/Skills";
import Projects from "./components/Projects";

import Contact from "./components/Contact";

import TestEx from "./components/TestEx";
import Education from "./components/Education";
import POR from "./components/POR";

import Certifications from "./components/Certifications";
const App = () => {
  return (
    <div className="h-full bg-stone-800 mainDiv">
      <Container />
      <Skills />
      <Projects />
      <Education />
      <POR />
      <Certifications></Certifications>
      <Contact />
      <TestEx />
    </div>
  );
};

export default App;
