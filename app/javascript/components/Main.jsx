import React, {Component} from "react";
import NavBar from "./NavBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import User from "../requests/user";
import InspirationIndexPage from "./InspirationIndexPage";
import AuthRoute from "./AuthRoute";
import SignInPage from "./SignInPage";
import Session from "../requests/session";
import InspirationSearchPage from "./InspirationSearchPage";

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
        <div className="container-fluid">
          <NavBar 
            onSignOut={this.destroySession} 
            currentUser={currentUser} 
          />
          <Switch>
            <AuthRoute
              isAuth={currentUser}
              path="/inspiration/search"
              exact
              render={
                props => <InspirationSearchPage {...props} />
              }
            />
            <AuthRoute
              isAuth={currentUser}
              path="/inspirations"
              exact
              render={
                props => <InspirationIndexPage {...props} />
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
            {/* <Route component={NotFoundPage} /> */}
          </Switch>
          <h1>Fruits are great!</h1>
        </div>
      </Router>
    )
  }
}

export default Main;
