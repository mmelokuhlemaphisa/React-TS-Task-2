import React from "react";
import Search from "./SearchBar";


export default function Header() {
  return (
    <div id="head" className="header-container">
      <div>
        <nav className="nav-bar">
          <h3 className="logo">Link Vault</h3>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      <div className="search-box">
        <Search />
      </div>
    </div>
  );
}
