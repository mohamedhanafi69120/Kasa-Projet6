import React from "react";
import { useParams } from "react-router-dom";
import locations from "../data/locations.json";
import Slider from "../composants/Slider";

const Locations = () => {
  const { id } = useParams();
  const location = locations.find((location) => location.id === id);

  return (
    <div>
      <Slider slides={location.pictures} />
    </div>
  );
};

export default Locations;
