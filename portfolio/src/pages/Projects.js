import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Route, Switch, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './../css/App.css';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <div>
          <h1> Snakes and Ladders </h1>
            My First Project was my most nerve wrecking project because I have absoloutely no idea of how it was going to turn out, I managed to create a simulation of the class board game!

            <a href ="https://git.generalassemb.ly/mzaman22/project-1">
            </a>
      <button>GitHub Link </button>

        </div>
        <div>
          <h1> M-ucket List</h1>
            This project I attempted to get more into using Express and Backend resources such as routing and MVC models to create a CRUD application thats basically for your movies list that you have yet to see. After seeing them you can keep them for reviewing or just delete them and edit other movies that you may have a second pass for later on!
            <a>https://git.generalassemb.ly/mzaman22/project-2 </a>
            <button>GitHub Link </button>
        </div>
        <div>
          <h1> Simple Weather App</h1>
            This was the first time I had learned how to fully use an API, this was very imformative as many of the worlds biggest applications have API calls and it was fun figuring out how to fetch calls and recive the data that you want. This application will return data based on the Zip Code you enter.
            <a>https://https://git.generalassemb.ly/mzaman22/react-weather-app </a>
            <button>GitHub Link </button>
        </div>
        <div>
          <h1> Top-Shelf</h1>
            One of my more favorite projects because the main learning did not come from the technology that we used but in the remote group work that we had to do. This gave me a very real world like experience of how things are going to look once I am stepping in the real world and working with multiple people on one project.
            <a>https://git.generalassemb.ly/HamiltonGroup1Project3/Project3alassemb.ly/mzaman22/react-weather-app </a>
            <button>GitHub Link </button>
            </div>


      </div>
    );
  }
}

export default Projects;
