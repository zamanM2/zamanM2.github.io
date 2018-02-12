import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
//import ReactDOM from 'react-dom';

import './../css/App.css';

class Experiences extends Component {
  render() {
    return (
      <div className="Experiences">
      <i>Full Stack Web Developer</i>
      <div>
      My journey started in College when I was first introduced
      to somthing called programming. I was stuck in a place where I did not know which major to head towards till my senior friend asked me a few questions about what I love and then recomended me towards introductory programming. My first real taste and of satisfaction came when I completed a project on creating a ATM simulator and a calculator. Though it is insignificant to the bigger projects it just went to show me what my own mind could create and be part of more bigger projects. From here I dove more deep into algorithms and I had a fasination for understanding how real world applications work and what kind of magic is behind the curtain.
      </div>
      </div>
    );
  }
}

export default Experiences;
