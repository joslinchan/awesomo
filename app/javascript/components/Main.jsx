import React, {Component} from "react";
import NavBar from "./NavBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import User from "../requests/user";
import InspirationIndexPage from "./InspirationIndexPage";
import AuthRoute from "./AuthRoute";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import Session from "../requests/session";
import DesignAssetSearchPage from "./DesignAssetSearchPage";
import WelcomePage from "./WelcomePage";

import "../index.css";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentUser: undefined
    };

    this.getUser = this.getUser.bind(this);
    this.destroySession = this.destroySession.bind(this);

  }

  destroySession() {
    Session.destroy()
    .then(() => {
      this.setState({currentUser: undefined});
    });
  }

  getUser() {
    return User.current().then(data => {
      if (data.id) {
        this.setState({currentUser: data})
      }
    });
  }

  componentDidMount() {
    this.getUser()
    .then(() => {
      this.setState({ loading: false});
    });
  }

  render() {
    const {currentUser, loading} = this.state;

    if (loading) {
      return(
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }

    return(
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
                props => <InspirationIndexPage {...props} />
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
    )
  }
}

export default Main;
