import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

// ! Only load up the marketing and auth app when they are click
const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // ? Why do we need to create a prefix | bc webpack will rename classes like so "jss1" and "jss2" and if we have two apps that use the same class name, they will conflict with each other
  const generateClassName = createGenerateClassName({
    productionPrefix: "cnt",
  });
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path='/auth'>
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path='/' component={MarketingLazy} />
            </Suspense>
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
