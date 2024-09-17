import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Card = ({ location }) => {
  return (
    <div key={location.id} className="card-item">
      <NavLink to={`/locations/${location.id}`}>
        <img src={location.cover} alt={location.title} />
        <div className="cardTitle">
          <h3>{location.title}</h3>
        </div>
      </NavLink>
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
