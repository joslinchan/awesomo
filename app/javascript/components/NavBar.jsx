import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = props => {
  const {currentUser, onSignOut = () => {}} = props;

  const handleClick = event => {
    event.preventDefault();
    onSignOut();
  };

  return(
    <nav className="NavBar nav justify-content-end bg-dark mb-2  shadow-sm">
      <NavLink 
        className="btn btn-dark" 
        exact 
        to="/">
        Intro
      </NavLink>

      {currentUser ? (
        <React.Fragment>
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
          <span>{currentUser.full_name}</span>
          <a 
            className="btn btn-dark"
            onClick={handleClick} href="#"
          >
            Sign Out
          </a>
        </React.Fragment>
      ) : (
        <NavLink 
          className="btn btn-dark"
          exact 
          to="/sign_in">
          Sign In
        </NavLink>
      )}
    </nav>
  )
}

export default NavBar;
