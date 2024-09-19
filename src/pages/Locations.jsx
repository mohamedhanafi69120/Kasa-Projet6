import React from "react";
import { useParams } from "react-router-dom";
import locations from "../data/locations.json";
import Slider from "../composants/Slider";
import Dropdown from "../composants/Dropdown";

const Locations = () => {
  const { id } = useParams();
  const location = locations.find((location) => location.id === id);
  const displayTags = location.tags.map((tag, index) => (
    <span key={index}>{tag}</span>
  ));

  /*******function pour generer les etoiles ******* */

  const displayStars = (rating) => {
    return [0, 1, 2, 3, 4].map((i) => (
      <i
        className={`fas fa-star ${i < rating ? "redStars" : "greyStars"}`}
        key={i}
      ></i>
    ));
  };

  return (
    <div>
      <Slider slides={location.pictures} />
      <div className="locationInfos">
        <div className="boxLeft">
          <h2>{location.title}</h2>
          <p>{location.location}</p>
          <div className="labelTag">{displayTags}</div>
        </div>
        <div className="boxRight">
          <div className="hostProfile">
            <h3>{location.host.name}</h3>
            <img src={location.host.picture} alt="" />
          </div>
          <div className="stars">{displayStars(location.rating)}</div>
        </div>
      </div>

      {/* Ajout des dropdowns avec une nouvelle className */}
      <div className="locationDetailsDropdown">
        <Dropdown title="Description" text={location.description} />
        <Dropdown title="Equipements" text={location.equipments} />
      </div>
    </div>
  );
};

export default Locations;
