import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = props => {
  const {currentUser, onSignOut = () => {}} = props;

  const handleClick = event => {
    event.preventDefault();
    onSignOut();
  };

  return(
    <nav className="NavBar nav justify-content-end bg-dark mb-2">

      {currentUser ? (
        <React.Fragment>
          <span className="text-light">{currentUser.full_name}</span>
          <NavLink 
            className="btn btn-dark" 
            exact 
            to="/">
            Intro
          </NavLink>
          <NavLink 
            className="btn btn-dark"
            exact to="/inspiration/search"
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
            Sign Out
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
          to="/sign_in">
          Sign In
        </NavLink>
        </span>
      )}
    </nav>
  )
}

export default NavBar;
