import React from "react";
import PropTypes from "prop-types";

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

Navigation.propTypes = {
  isActive: PropTypes.bool,
  activeClass: PropTypes.string,
  inactiveClass: PropTypes.string,
};

export default Navigation;
