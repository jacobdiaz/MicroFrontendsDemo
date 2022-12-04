import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

// !When building for production, we want to make sure that the class names are prefixed for this project/app
const generateClassName = createGenerateClassName({
  productionPrefix: "mk",
});

export default () => {
  return (
    <div>
      {/* Styles provider has some setup for CSS in JS class naming */}
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/pricing' component={Pricing} />
            <Route exact path='/' component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
