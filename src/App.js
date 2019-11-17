import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/main.scss";

import Auth from "./pages/Auth";


const App = () => {


  return (
    <Switch>
      {/* these are good */}
      <Route exact path="/" component={Auth} />
    </Switch>
  );
};
export default App;
