import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src="/logo.png" alt="Logo de lagence" />
      <nav>
        <NavLink to="/" className={(nav) => (nav.isActive ? "navActive" : "")}>
          Accueil
        </NavLink>

        <NavLink
          to="/About"
          className={(nav) => (nav.isActive ? "navActive" : "")}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
