import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/main.scss";

import Login from "./pages/Login";


const App = () => {


  return (
    <Switch>
      {/* these are good */}
      <Route exact path="/" component={Login} />
    </Switch>
  );
};
export default App;
