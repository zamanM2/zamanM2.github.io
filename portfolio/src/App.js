import React, { Component } from 'react';
import { Route, Switch,Link } from 'react-router-dom';
//import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Navigation from'./components/Navigation';
import './css/App.css';
import './assets/headshot.png'

//import ReactDOM from 'react-dom';

import './css/App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
      <Navigation  />

        <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/Experiences"  component={Experiences} />
       <Route path="/Projects" component={Projects} />
        </Switch>


      </div>
    );

  }
}

export default App;
