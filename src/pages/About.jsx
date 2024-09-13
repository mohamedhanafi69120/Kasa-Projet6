/**********code 1*********/

import React from "react";
import Banner from "../composants/Banner";
<<<<<<< HEAD
import prestations from "../data/prestations.json";
import DropdownSelect from "../composants/DropdownSelect";
=======
import DropdownSelect from "../composants/DropdownSelect";
import prestations from "../data/prestations.json";
>>>>>>> e845faab4183ecb0edc8db51635a2844a1bee24a

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
