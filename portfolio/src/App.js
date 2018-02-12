import React, { Component } from 'react';
import { Route, Switch,Link } from 'react-router-dom';
//import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import About from './pages/About';
import Home from './pages/Home';
import './css/App.css';

//import ReactDOM from 'react-dom';

import './css/App.css';

class App extends Component {
  render() {
    return (

      <div className="App">


       <Home />
       <Switch>
       <Route path="/Experiences" exact component={Experiences} />
       <Route path="/About" exact component={About} />
       </Switch>


      </div>
    );

  }
}

export default App;
