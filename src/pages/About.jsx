import React from "react";
import Banner from "../composants/Banner";
import prestations from "../data/prestations.json";
import DropdownSelect from "../composants/DropdownSelect";

const About = () => {
  return (
    <div>
      <Banner
        displaytext={false}
        image="Montagnes.jpg"
        subtitle="PhotodeMontagnes"
      />
      <DropdownSelect prestations={prestations} />
    </div>
  );
};

export default About;
