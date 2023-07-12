import React from "react";
import ReactDOM from "react-dom/client";
import HomeCarousel from "./HomeCarousel";
import ContentCarousel from "./ContentCarousel";

function Body() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <HomeCarousel />
      <ContentCarousel />
      {/* <ContentCarousel /> */}
    </div>
  );
}

export default Body;
