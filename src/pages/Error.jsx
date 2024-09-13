import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="errorPage">
      <h1>404</h1>
      <p>Oups! la page que vous demandez n'existe pas.</p>

      <NavLink to="/">Retourner sur la page d'acceuil</NavLink>
    </div>
  );
};

export default Error;
