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
            <a>
            https://git.generalassemb.ly/mzaman22/project-1
            </a>
      <button>GitHub Link </button>

        </div>

      </div>
    );
  }
}

export default Projects;
