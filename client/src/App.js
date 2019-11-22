import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/main.scss";

import Auth from "./pages/Auth";
import Home from "./pages/Home";

const App = () => {
  return (
    <Switch>
      {/* these are good */}
      <Route exact path="/" component={Auth} />
      <Route exact path="/home" component={Home} />
    </Switch>
  );
};
export default App;
