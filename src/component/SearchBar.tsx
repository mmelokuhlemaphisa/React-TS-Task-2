import React from 'react'
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  return (
   <div className="search-container">
    <input type="text" className="search-input" placeholder="Search..."/>
    <button type="submit" className="search-button"><FaSearch className="social-icon instagram" style={{color:'white'}}/></button>
    </div>
  );
}
