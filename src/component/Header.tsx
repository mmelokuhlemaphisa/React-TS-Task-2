import React from "react";
import Search from "./SearchBar";
import type { LinkItem } from "./Linklist";

interface Props {
  items: LinkItem[] | [];
  setItems: React.Dispatch<React.SetStateAction<LinkItem[]>>;
  isSearching: boolean;
  searchResults: LinkItem[] | [];
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchResults: React.Dispatch<React.SetStateAction<LinkItem[]>>;
}

export default function Header({
  items,
  setItems,
  setIsSearching,
  isSearching,
  setSearchResults,
  searchResults,
}: Props) {
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
        <Search
          items={items}
          setItems={setItems}
          setIsSearching={setIsSearching}
          setSearchResults={setSearchResults}
        />
      </div>
    </div>
  );
}
