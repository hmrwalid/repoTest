import React from "react";
import "./Header.css";
import Search from "../../assets/assets_Homework_Front-End_01/search.png";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <h1 className="title">The Joke Bible</h1>
        <h2>Daily Laughs for you and yours</h2>
        <div className="search-box"> 
          <input type="text" placeholder="How can we make you laugh today?" className="input-search" />
          <img src={Search} alt="search" className="search"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
