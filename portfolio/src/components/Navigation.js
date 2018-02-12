import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = (props) => {
  console.log( 'Nav component loaded');



  return (
      <div className="container">
      <NavLink to="/Home" exact className="nav" activeClassName="active">
      Home
      </NavLink>
      <NavLink to="/Experiences" exact className="nav" activeClassName="active">
      Experiences
      </NavLink>
      <NavLink to="/About" className="nav" activeClassName="active">
      About
      </NavLink>

    </div>


  );
};

export default NavBar;
