import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const Slider = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const totalSlide = slides.length;

  const arrownext = (currentIndex) =>
    currentIndex === totalSlide - 1 ? 0 : currentIndex + 1;
  const arrowprev = (currentIndex) =>
    currentIndex === 0 ? totalSlide - 1 : currentIndex - 1;
  const displaynavigation = totalSlide > 1;

  return (
    <div className="slidecontent">
      <img src={slides[currentSlideIndex]} alt={`slide ${currentSlideIndex}`} />
      {displaynavigation && (
        <div>
          <i
            className="fa-solid fa-chevron-left rafter rafterLeft"
            onClick={() => setCurrentSlideIndex(arrowprev(currentSlideIndex))}
          ></i>
          <i
            className="fa-solid fa-chevron-right rafter rafterRight"
            onClick={() => setCurrentSlideIndex(arrownext(currentSlideIndex))}
          ></i>
        </div>
      )}
      <div>
        {displaynavigation && (
          <span className="counter">
            {`${currentSlideIndex + 1}/${totalSlide}`}
          </span>
        )}
      </div>
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
};
export default Slider;
