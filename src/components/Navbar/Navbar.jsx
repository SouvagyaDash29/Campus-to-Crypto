import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="circle2"></div>
      <div className="navbar">
        <div className="home">
          <Link to="/">
            <img src="" alt="LoGo" />
          </Link>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <NavLink
                to="/About"
                style={({ isActive }) => {
                  return isActive ? { color: "blue" } : { color: "white" };
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Product"
                style={({ isActive }) => {
                  return isActive ? { color: "blue" } : { color: "white" };
                }}
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Community"
                style={({ isActive }) => {
                  return isActive ? { color: "blue" } : { color: "white" };
                }}
              >
                Community
              </NavLink>
            </li>
          <NavLink to='/Contact'><button>Contact US</button></NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
