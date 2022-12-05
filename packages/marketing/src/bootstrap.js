import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    }); // If we provide a default History use it else create a memory history

  if (onNavigate) {
    // if we get passed a onNav, when ever memory history (url path) changes, call onNavigate
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathName } = history.location;
      if (pathName !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// Dev Mode
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#root-marketing-dev");
  if (devRoot) mount(devRoot, { defaultHistory: createBrowserHistory() }); // If we are in dev mode we want to use a browser history to see the url
}
export { mount };
