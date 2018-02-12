import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/App.css';


const Navigation = ()=> {
  console.log( 'Nav component loaded');



  return (
      <div className="container">

       <NavLink to="/" exact className="nav" activeClassName="active">
      <button>Home </button>
      </NavLink>

      <NavLink to="/Experiences" exact className="nav" activeClassName="active">
      <button> Experiences </button>
      </NavLink>
      <NavLink to="/Projects" className="nav" activeClassName="active">
      <button> Projects</button>
      </NavLink>

    </div>


  );
};

export default Navigation;
