import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { BookContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const { login } = useContext(BookContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        login.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
