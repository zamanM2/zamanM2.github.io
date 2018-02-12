import React, { Component } from 'react';
import { Route, Switch,Link } from 'react-router-dom';
//import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import About from './pages/About';
import Home from './pages/Home';
import Navigation from'./components/Navigation';
import './css/App.css';

//import ReactDOM from 'react-dom';

import './css/App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
      <Navigation />
        <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/Experiences"  component={Experiences} />
       <Route path="/About" component={About} />
        </Switch>


      </div>
    );

  }
}

export default App;
