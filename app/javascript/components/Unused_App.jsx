import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AuthRoute from "./AuthRoute";
import NavBar from "./NavBar";
import NotFoundPage from "./NotFoundPage";
import React, {Component} from "react";
import Session from "../requests/session";
import SignInPage from "./SignInPage";
import User from "../requests/user";
import WelcomePage from "./WelcomePage";
import InspirationIndexPage from "./InspirationIndexPage";
import SearchPage from "./SearchPage";

class App extends Component {
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
        <div className="App">
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
              path="/inspirations/search"
              exact
              render={
                props => <SearchPage {...props} />
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
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
