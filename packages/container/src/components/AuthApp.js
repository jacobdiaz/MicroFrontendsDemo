import { mount } from "auth/AuthApp";
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  const mountConfig = {
    // ! Provide the initial path for the auth appa
    initialPath: history.location.pathname,

    // ! When a path is changed in the Auth App, reflex the same changes to the container
    onNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },

    // ! Container and Auth Apps have access to if a user is signed in. This fn mutates state in container
    onSignIn,
  };

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, mountConfig);
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
