import React from "react";
import "./App.css";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TestEx from "./components/TestEx";
import Education from "./components/Education";
const App = () => {
  return (
    <div className="h-full bg-stone-800 mainDiv">
      <Container />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <TestEx />
    </div>
  );
};

export default App;
