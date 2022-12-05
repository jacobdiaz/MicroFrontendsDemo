<<<<<<< HEAD
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
=======
import { createGenerateClassName, StylesProvider } from "@material-ui/styles";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthApp } from "./components/AuthApp";
>>>>>>> a77bc2f57c7706411aad56bd9af59a2c5caa45ab
import Header from "./components/Header";
import { MarketingApp } from "./components/MarketingApp";

// ! Only load up the marketing and auth app when they are click
const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const Loading = () => <div>Loading...</div>;
export default () => {
  // ? Why do we need to create a prefix | bc webpack will rename classes like
  // so "jss1" and "jss2" and if we have two apps that use the same class name,
  // they will conflict with each other
  const generateClassName = createGenerateClassName({
    productionPrefix: "cnt",
  });
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
<<<<<<< HEAD
            <Suspense fallback={<Loading />}>
              <Route path='/auth' component={AuthLazy} />
              <Route path='/' component={MarketingLazy} />
            </Suspense>
=======
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />{" "}
>>>>>>> a77bc2f57c7706411aad56bd9af59a2c5caa45ab
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
