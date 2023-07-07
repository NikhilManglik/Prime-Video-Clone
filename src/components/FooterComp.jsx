import React from "react";
import ReactDOM from "react-dom/client";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div class="pv-logo"></div>
      <ul
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          listStyle: "none",
          overflowX: "scroll",
        }}
      >
        <li>
          <a>Terms and Privacy Notice</a>
        </li>
        <li>
          <a>Send us feedback</a>
        </li>
        <li>
          <a>Help</a>
        </li>
        <li>© 1996-{year}, Amazon.com, Inc. or its affiliates</li>
      </ul>
    </footer>
  );
}

export default Footer;
