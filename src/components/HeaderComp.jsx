import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return (
    <header>
      <ul
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          listStyle: "none",
          overflowX: "scroll",
          padding: 0,
        }}
      >
        <li>Prime Video</li>
        <li>
          <label>Home</label>
          <label>Store</label>
          <label>Categories</label>
          <label>My Stuff</label>
        </li>
        <li>
          <label>Search</label>
          <label>user info</label>
        </li>
      </ul>
    </header>
  );
}

export default Header;
