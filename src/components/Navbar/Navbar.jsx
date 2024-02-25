import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const logo = "https://campus-crypto.s3.eu-north-1.amazonaws.com/favicon-logo.png";
const Navbar = () => {
  return (
    <nav>
      <div className="circle2"></div>
      <div className="navbar">
        <div className="home">
          <Link to="/">
            <img src={logo} alt="LoGo" />
          </Link>
        </div>
        <div className="navigation">
          <ul>
          <li>
              <NavLink
                to="/COE"
                style={({ isActive }) => {
                  return isActive ? { color: "#D2FF3A" } : { color: "white" };
                }}
              >
                COE
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                style={({ isActive }) => {
                  return isActive ? { color: "#D2FF3A" } : { color: "white" };
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Product"
                style={({ isActive }) => {
                  return isActive ? { color: "#D2FF3A" } : { color: "white" };
                }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Community"
                style={({ isActive }) => {
                  return isActive ? { color: "#D2FF3A" } : { color: "white" };
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
