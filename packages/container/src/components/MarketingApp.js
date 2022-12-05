import {mount} from "marketing/MarketingApp";
import React, {useEffect, useRef} from "react";
import {useHistory} from "react-router-dom";

export const MarketingApp = () => {
  const ref = useRef(null); // Create a reference to the div we are inserting
  const history = useHistory(); // Create a copy of containers browser history object

  // When component loads mount our Marketing App into this div!
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,

      // When onNavigate gets called memory history  passes location into it
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate); // Listen for changes in container history
  }, []);

  return <div ref={ref} />;
};
