import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

// ! Only load up the marketing and auth app when they are click
const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const Loading = () => <div>Loading...</div>;
export default () => {
  // ? Why do we need to create a prefix | bc webpack will rename classes like so "jss1" and "jss2" and if we have two apps that use the same class name, they will conflict with each other
  const generateClassName = createGenerateClassName({
    productionPrefix: "cnt",
  });
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Suspense fallback={<Loading />}>
              <Route path='/auth' component={AuthLazy} />
              <Route path='/' component={MarketingLazy} />
            </Suspense>
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
