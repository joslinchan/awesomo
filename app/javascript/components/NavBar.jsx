import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = (props) => {
  const { currentUser, onSignOut = () => {} } = props;

  const handleClick = (event) => {
    event.preventDefault();
    onSignOut();
  };

  return (
    <nav className="bg-dark">
      <a href="/inspirations/search" className="brand">
        <span className="icon" />
      </a>

      <section className="NavBar mb-2">
        {currentUser ? (
          <React.Fragment>
            <span className="text-light lead">
              Hello
              {' '}
              {currentUser.first_name}
              !
            </span>
            <NavLink
              className="btn btn-dark"
              exact
              to="/"
            >
              Intro
            </NavLink>
            <NavLink
              className="btn btn-dark"
              exact
              to="/inspirations/search"
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
            <NavLink
              className="btn btn-dark"
              onClick={handleClick}
              to="#"
            >
              Sign Out
              {' '}
              {' '}
              <i className="fas fa-sign-out-alt" />
            </NavLink>
          </React.Fragment>
        ) : (
          <span className="sign">
            <NavLink
              className="btn btn-dark"
              exact
              to="/"
            >
              Intro
            </NavLink>
            <NavLink
              className="btn btn-dark"
              exact
              to="/sign_up"
            >
              Sign Up
            </NavLink>
            <NavLink
              className="btn btn-dark"
              exact
              to="/sign_in"
            >
              Sign In
              {' '}
              {' '}
              <i className="fas fa-sign-in-alt" />
            </NavLink>
          </span>
        )}
      </section>
    </nav>
  );
};

NavBar.propTypes = {
  currentUser: PropTypes.number.isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default NavBar;
