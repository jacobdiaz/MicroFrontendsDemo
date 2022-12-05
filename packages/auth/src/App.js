import { createGenerateClassName, StylesProvider } from "@material-ui/styles";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      {/* Styles provider has some setup for CSS in JS class naming */}
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path='/auth/signin'>
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path='/auth/signup'>
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
