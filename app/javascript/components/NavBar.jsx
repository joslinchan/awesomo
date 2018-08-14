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

      {currentUser && (
        <NavLink exact to="/inpsirations/new" />
      )}
    </nav>
  )
}

export default NavBar;
