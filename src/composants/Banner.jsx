import React from "react";
import PropTypes from "prop-types";

const Banner = ({ image, subtitle, displaytext }) => {
  return (
    <div className="banner">
      <img src={image} alt={subtitle} />
      {displaytext && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  );
};

/******definition des types de données a passer via les props, les props sont des données
 * passer au composants et obligatoirement requise utiliser dans le cas de reutilisation du composant***/
Banner.propTypes = {
  image: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  displaytext: PropTypes.bool.isRequired,
};

export default Banner;
