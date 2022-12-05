import { createBrowserHistory, createMemoryHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// ! MOUNT GETS CALLED FROM CONTAINER
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    }); // set initial path to current path

  if (onNavigate) {
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
  const devRoot = document.querySelector("#root-auth-dev");
  if (devRoot) mount(devRoot, { defaultHistory: createBrowserHistory() }); // If we are in dev mode we want to use a browser history to see the url
}
export { mount };
