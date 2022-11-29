import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export const MarketingApp = () => {
  const ref = useRef(null); // Create a reference to the div we are inserting

  // When component loads mount our Marketing App into this div!
  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
