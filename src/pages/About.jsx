/**********code 1*********/

import React from "react";
import Banner from "../composants/Banner";
import DropdownSelect from "../composants/DropdownSelect";
import prestations from "../data/prestations.json";

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
