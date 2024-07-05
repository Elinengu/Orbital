import React from "react";
// so only component will be refreshed (Link to)
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="">
      <nav className="navbar">
        <Link to="/">
          <img
            href="/"
            className="navbar-logo"
            //src="https://pbs.twimg.com/media/EfT6E7lUMAAJYKd?format=jpg&name=large"
            src={logo}
            alt="NUSEvent"
          ></img>
        </Link>
        {/* <ul id="nav-mobile" className="right hide-on-med-and-down"></ul> for sidenav in future*/}
      </nav>
    </div>
  );
};

export default NavBar;
