import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src="logo.png" alt="Logo de lagence" />
      <nav>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "navActive" : null)}
        >
          Accueil
        </NavLink>

        {
          <NavLink
            to=""
            className={(nav) => (nav.isActive ? "navActive" : null)}
          >
            A propos
          </NavLink>
        }
      </nav>
    </header>
  );
};

export default Header;
