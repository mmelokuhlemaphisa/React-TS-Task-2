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
        
      
      }}
    >
      <div>
        <nav>
          <h1>Link Vault</h1>
          GUUU</nav>
      </div>
      <div >
          <Search />
        </div>
    
    </div>
  );
}
