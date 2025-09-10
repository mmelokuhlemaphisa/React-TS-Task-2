import React from 'react'
import Search from './SearchBar';

export default function Header() {
  return (
    <div
      id="head"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding:"3%"
      }}
    >
      <div>
        <nav
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "28%",
            textDecoration: "black",
          }}
        >
          <h1 style={{border:'1px solid black'}}>Link Vault</h1>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">contact</a>
        </nav>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
}
