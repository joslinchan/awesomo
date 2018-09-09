import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = props => {
  const {currentUser, onSignOut = () => {}} = props;

  const handleClick = event => {
    event.preventDefault();
    onSignOut();
  };

  return(
    <nav className="NavBar bg-dark mb-2">
      <a href="/inspirations/search" className="brand">
        <span className="icon">
        </span>
      </a>

      {currentUser ? (
        <React.Fragment>
          <span className="text-light lead">Hello {currentUser.first_name}!</span>
          <NavLink 
            className="btn btn-dark" 
            exact 
            to="/">
            Intro
          </NavLink>
          <NavLink 
            className="btn btn-dark"
            exact to="/inspirations/search"
          >
            Search
          </NavLink>
          <NavLink 
            className="btn btn-dark"
            exact 
            to="/inspirations"
          >
            Collection
          </NavLink>
          <a 
            className="btn btn-dark"
            onClick={handleClick} href="#"
          >
            Sign Out <i className="fas fa-sign-out-alt"></i>
          </a>
        </React.Fragment>
      ) : (
        <span className="sign">
        <NavLink 
          className="btn btn-dark" 
          exact 
          to="/">
          Intro
        </NavLink>
        <NavLink 
          className="btn btn-dark"
          exact 
          to="/sign_up">
          Sign Up
        </NavLink>
        <NavLink 
          className="btn btn-dark"
          exact 
          to="/sign_in">
          Sign In <i className="fas fa-sign-in-alt"></i>
        </NavLink>
        </span>
      )}
    </nav>
  )
}

export default NavBar;
