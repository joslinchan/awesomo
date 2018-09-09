import React from "react";
import {Redirect, Route} from "react-router-dom";
import swal from "sweetalert";

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
          swal("Please sign in", "Or sign up.\n This way you can save items! =)");
          return <Redirect to="/sign_in" />;
        }
      }}
      {...restProps}
    />
  );
};

export default AuthRoute;
