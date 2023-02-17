import React from "react";

import "../../styles/styleForNav.css";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  let activeClass = "active-class";
  let inactiveClass = "nav-link";

  return (
    <div className="nav">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Active Note
      </NavLink>
      <NavLink
        to="/archived"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Archived Note
      </NavLink>
      <NavLink
        to="/notes/add"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Add Note
      </NavLink>
    </div>
  );
};

export default Navigation;
