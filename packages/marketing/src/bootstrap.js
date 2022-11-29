import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// Dev Mode
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#root-marketing-dev");
  if (devRoot) mount(devRoot);
}
export { mount };
