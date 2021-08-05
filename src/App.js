import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/Private.Route";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Task from "./pages/Task";
import User from "./pages/User";
import { retrieveUserSession } from "./utils";

const App = () => {
  useEffect(() => {
    window.addEventListener("storage", () => {
      if (retrieveUserSession) window.location.replace("/");
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/tasks" component={Task} />
        <PrivateRoute path="/profile" component={User} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
