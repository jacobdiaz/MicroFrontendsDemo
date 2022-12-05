import {createGenerateClassName, StylesProvider} from "@material-ui/styles";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {AuthApp} from "./components/AuthApp";
import Header from "./components/Header";
import {MarketingApp} from "./components/MarketingApp";

export default () => {
  // ? Why do we need to create a prefix | bc webpack will rename classes like
  // so "jss1" and "jss2" and if we have two apps that use the same class name,
  // they will conflict with each other
  const generateClassName = createGenerateClassName({
    productionPrefix : "cnt",
  });
  return (
      <BrowserRouter><StylesProvider generateClassName = {generateClassName}>
          <div><Header /><Switch>< Route path = '/auth' component =
      { AuthApp } />
            <Route path='/' component={MarketingApp} /> <
          /Switch>
        </div></StylesProvider>
    </BrowserRouter>);
};
