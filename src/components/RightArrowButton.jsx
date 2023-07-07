import React from "react";
import ReactDOM from "react-dom/client";
import right_arrow from "../images/right-arrow.png";

function RightArrowButton(props) {
  let classname = "arrowbutton";
  if (props.isVisible) {
    classname = "not_display arrowbutton";
  }
  return (
    <button
      //   className="arrowbutton"
      className={classname}
      onClick={(event) => {
        event.target.previousElementSibling.scrollLeft += 1400; // USE REF HOOK
      }}
      style={{ gridArea: "right" }}
      //   style={style}
    >
      <img
        src={right_arrow}
        alt="right"
        style={{ width: 24, height: 24 }}
      ></img>
    </button>
  );
}

export default RightArrowButton;

// { <button
//   className="arrowbutton"
//   onClick={(ev) => {
//     ev.target.previousElementSibling.scrollLeft += 1400; // USE REF HOOK
//   }}
//   style={{ gridArea: "right" }}
// >
//   {/* right */}
//   <img src={right_arrow} alt="right" style={{ width: 24, height: 24 }}></img>
// </button>; }
