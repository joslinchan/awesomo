import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import AuthRoute from './AuthRoute';
import DesignAssetIndexPage from './DesignAssetIndexPage';
import DesignAssetSearchPage from './DesignAssetSearchPage';
import NavBar from './NavBar';
import NotFoundPage from './NotFoundPage';
import Session from '../requests/session';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import User from '../requests/user';
import WelcomePage from './WelcomePage';

import '../index.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    this.getUser()
      .then(() => {
        this.setState({ loading: false });
      });
  }

  getUser = () => User.current().then((data) => {
    if (data.id) {
      this.setState({ currentUser: data });
    }
  })

  destroySession = () => {
    Session.destroy()
      .then(() => {
        this.setState({ currentUser: undefined });
      });
  }

  render() {
    const { currentUser, loading } = this.state;

    if (loading) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }

    return (
      <Router>
        <div>
          <NavBar
            onSignOut={this.destroySession}
            currentUser={currentUser}
          />
          <Switch>
            <Route
              path="/"
              exact
              component={WelcomePage}
            />
            <AuthRoute
              isAuth={currentUser}
              path="/inspirations"
              exact
              render={
                props => <DesignAssetIndexPage {...props} />
              }
            />
            <AuthRoute
              isAuth={currentUser}
              path="/inspirations/search"
              exact
              render={
                props => <DesignAssetSearchPage {...props} />
              }
            />
            <Route
              path="/sign_up"
              render={
                props => (
                  <SignUpPage {...props} onSignIn={this.getUser} />
                )
              }
            />
            <Route
              path="/sign_in"
              render={
                props => (
                  <SignInPage {...props} onSignIn={this.getUser} />
                )
              }
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Main;
