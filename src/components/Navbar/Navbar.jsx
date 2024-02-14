import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="circle"></div>
      <div className="navbar">
        <div className="home">
          <Link to="/*">
            <img src="" alt="LoGo" />
          </Link>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <NavLink to="/*">
                About <IoIosArrowDown />
              </NavLink>
            </li>
            <li>
              <NavLink to="/*">
                Product <IoIosArrowDown />
              </NavLink>
            </li>
            <li>
              <NavLink to="/*">
                Community <IoIosArrowDown />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
