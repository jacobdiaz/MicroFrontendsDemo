import React from "react";
import { MarketingApp } from "./components/MarketingApp";

// ! TEST CI CD 2
export default () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100vw",
          background: "#f1f1f1",
          zIndex: "200",
        }}
      >
        <nav>
          <p>navBar</p>
        </nav>
        <hr />
      </div>
      <MarketingApp />
    </>
  );
};
