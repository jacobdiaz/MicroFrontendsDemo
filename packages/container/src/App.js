import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MarketingApp } from "./components/MarketingApp";
import Header from "./components/Header";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

export default () => {
  // ? Why do we need to create a prefix | bc webpack will rename classes like so "jss1" and "jss2" and if we have two apps that use the same class name, they will conflict with each other
  const generateClassName = createGenerateClassName({
    productionPrefix: "cnt",
  });
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <MarketingApp />
      </BrowserRouter>
    </StylesProvider>
  );
};
