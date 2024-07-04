import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Navbar.css";

const NavBar = () => {
  /* return (
    <div className="navBar">
      <nav>
        <div
          className="nav-wrapper blue-grey lighten-5 "
          style={{ display: "flex", alignItems: "center", height: "100%" }}
        >
  <Link to="/">
    <img className="navBar-logo" src={logo} alt="NUSEvent"></img>
  </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          </ul>
        </div>
      </nav>
    </div>
  );
*/
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          href="/"
          className="item"
          //src="https://pbs.twimg.com/media/EfT6E7lUMAAJYKd?format=jpg&name=large"
          src={logo}
          alt="no image"
        ></img>
      </div>
    </nav>
  );
};

export default NavBar;
