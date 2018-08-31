import React from "react";
import {Redirect, Route} from "react-router-dom";

const AuthRoute = props => {
  const {
    isAuth = false, 
    component: Component, 
    render, 
    ...restProps
  } = props;

  return(
    <Route
      render={routeProps => {
        if (isAuth) {
          if (typeof render === "function") {
            return render(routeProps);
          } else {
            return <Component {...routeProps} />;
          }
        } else {
          return <Redirect to="/sign_in" />;
        }
      }}
      {...restProps}
    />
  );
};

export default AuthRoute;
