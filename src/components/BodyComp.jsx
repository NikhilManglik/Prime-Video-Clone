import React from "react";
import ReactDOM from "react-dom/client";
import HomeCarousel from "./HomeCarousel";
import ContentCarousel from "./ContentCarousel";

function Body() {
  return (
    <body style={{ backgroundColor: "pink" }}>
      <HomeCarousel />
      <ContentCarousel />
      {/* <ContentCarousel /> */}
    </body>
  );
}

export default Body;
