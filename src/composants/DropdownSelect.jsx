import React from "react";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";

const DropdownSelect = ({ prestations }) => {
  return (
    <div>
      {prestations.map((prestation) => (
        <Dropdown
          key={prestation.id}
          title={prestation.title}
          text={prestation.text}
        />
      ))}
    </div>
  );
};

/*********deffinitions des props */
<<<<<<< HEAD
DropdownSelect.propTypes = {
=======
DropdownSelect.PropTypes = {
>>>>>>> e845faab4183ecb0edc8db51635a2844a1bee24a
  prestations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default DropdownSelect;
