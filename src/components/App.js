import React, {Component, useState} from "react";
import "../styles/App.css";

const App = () => {
  return (
    <>
      <p data-ns-test="project-name">Project 1</p>
      <p data-ns-test="project-description">Something 1</p>
      <p data-ns-test="project-name">Project 2</p>
      <p data-ns-test="project-description">Something 2</p>
    </>
  );
};

export default App;
