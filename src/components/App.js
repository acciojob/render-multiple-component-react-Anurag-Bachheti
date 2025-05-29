import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {

  let projects = [
    {
      name: "Ai music composer",
      description: "A tool to play music compositions"
    },{
      name: "Eco-Friendly Smart Home",
      description: "A home automation system focusing on sustainability."
    },
    {
      name: "Virtual Travel Guide",
      description: "An immersive app offering virtual tours of destinations."
    }
  ];


  return (
    <div id="main" className="ns-wrapper">
      {projects.map((project, index)=> (
        <div key={index}>
          <h1 className={"project-name"}> {project.name} </h1>
          <h6 className={"project-description"}> {project.description} </h6>
        </div>
      ))}
    </div>
  )
}

export default App;