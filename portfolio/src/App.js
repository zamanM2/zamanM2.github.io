import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import About from './pages/About';
import Home from './pages/Home';

//import ReactDOM from 'react-dom';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      {/*
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Projects"exact component={Projects} />
          <Route path="/About" exact componenet={About} />
          <Route path="/Experience" exact componenet={Experiences} />
          <Route path="/" component={NotFound} />

            )
          }

        </Switch> */}

      </div>
    );

  }
}

export default App;
