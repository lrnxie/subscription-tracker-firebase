import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authStatus, authLoading } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        !authStatus && !authLoading ? (
          <Redirect to="/signin" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
