import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

// !When building for production, we want to make sure that the class names are prefixed for this project/app
const generateClassName = createGenerateClassName({
  productionPrefix: "mk",
});

// Grab history object from bootstrap.js
export default ({ history }) => {
  return (
    <div>
      {/* Styles provider has some setup for CSS in JS class naming */}
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path='/pricing' component={Pricing} />
            <Route exact path='/' component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
