import React from "react";
import locations from "../data/locations.json";
import Card from "./Card";

const Gallery = () => {
  return (
    <div className="gallery">
      {locations.map((location) => (
        <Card location={location} key={location.id} />
      ))}
    </div>
  );
};

export default Gallery;
