import React, {Component} from "react";
import NavBar from "./NavBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";


class Main extends Component {
  render() {
    return(
      <Router>
        <div className="Main">
          <NavBar />
          <Switch>
            {/* <Route component={NotFoundPage} /> */}
          </Switch>
          <h1>Fruits are great!</h1>
        </div>
      </Router>
    )
  }
}

export default Main;
