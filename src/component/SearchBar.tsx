import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import type { LinkItem } from "./Linklist";

interface Props {
  items: LinkItem[] | [];
  setItems: React.Dispatch<React.SetStateAction<LinkItem[]>>;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchResults: React.Dispatch<React.SetStateAction<LinkItem[]>>;
}

export default function SearchBar({
  items,
  setItems,
  setSearchResults,
  setIsSearching,
}: Props) {
  // useEffect(() => {}, [set]);
  const [input, setInput] = useState<string>("");
  function search() {
    const lowerTerm = input.toLowerCase();
    const results: LinkItem[] = items.filter(
      (b) =>
        b.title.toLowerCase().includes(lowerTerm) ||
        b.descr.toLowerCase().includes(lowerTerm) ||
        b.url.toLowerCase().includes(lowerTerm)
    );
    setSearchResults(results);
    setIsSearching(true);
  }
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="search-button" onClick={search}>
        <FaSearch
          className="social-icon instagram"
          style={{ color: "white" }}
        />
      </button>
    </div>
  );
}
