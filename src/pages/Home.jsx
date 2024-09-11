import React from "react";
import Banner from "../composants/Banner";
import Gallery from "../composants/Gallery";

const Home = () => {
  return (
    <div>
      <Banner
        displaytext={true}
        image="Falaises.jpg"
        subtitle="PhotodeFalaises"
      />
      <Gallery />
    </div>
  );
};

export default Home;
