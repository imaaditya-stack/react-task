import { Redirect, Route } from "react-router-dom";
import { retrieveUserSession } from "../utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        retrieveUserSession() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", authenticated: false }} />
        )
      }
    />
  );
};

export default PrivateRoute;
