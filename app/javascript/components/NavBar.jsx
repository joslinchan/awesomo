import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = props => {
  const {currentUser, onSignOut = () => {}} = props;

  const handleClick = event => {
    event.preventDefault();
    onSignOut();
  };

  return(
    <nav className = "NavBar">
      <NavLink exact to="/">
        Awesomo
      </NavLink>

      {currentUser ? (
        <React.Fragment>
          <NavLink exact to="/inspirations">
            Collection
          </NavLink>
          <span>{currentUser.full_name}</span>
          <a onClick={handleClick} href="#">
            Sign Out
          </a>
        </React.Fragment>
      ) : (
        <NavLink exact to="/sign_in">
          Sign In
        </NavLink>
      )}
    </nav>
  )
}

export default NavBar;
