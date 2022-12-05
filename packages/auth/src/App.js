import { createGenerateClassName, StylesProvider } from "@material-ui/styles";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";

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
              <SignIn onSignIn={onSignIn} />
            </Route>
            <Route path='/auth/signup'>
              <SignUp onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
