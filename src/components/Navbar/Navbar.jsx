import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <p>Tech Boy</p>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Commands</a>
          </li>
          <li>
            <a href="#">About US</a>
          </li>
          <li>
            <a href="#">Invite</a>
          </li>
        </ul>
        <div>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Type here to Search"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
