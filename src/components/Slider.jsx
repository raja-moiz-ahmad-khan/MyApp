import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { sliderItems } from "../data";
import "../styles/slider.css";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };

  return (
    <div className="s-container">
      <div className="s-arrow left" onClick={() => handleClick("left")}>
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </div>
      <div className="wrapper" sliderIndex={sliderIndex} style={{transform:`translateX(${sliderIndex * -100}vw)`}}>
        {sliderItems.map((item) => (
          <div className="slide" key={item._id}>
            <div className="img-container">
              <img src={item.image} className="s-img" alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="s-arrow right" onClick={() => handleClick("right")}>
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </div>
    </div>
  );
};

export default Slider


  /* <div className="slide">
  <div className="img-container">
    <img src="/images/slider/2.jpg" alt="" className="s-img" />
  </div>
</div>
<div className="slide">
  <div className="img-container">
    <img src="/images/slider/1.jpg" alt="" className="s-img" />
  </div>
</div> */

