import React from "react";
import Stars from "../../atoms/stars/Stars";
import { Icon } from "../../atoms/icons/Icon";
import "./TestimonialCard.css";

const TestimonialCard = ({ iconName, stars, coment, image, name, city }) => {
  return (
    <div className="testimony">
      <div className="rating">
        <Icon name={iconName} size={32} decorative className="icon-color" />
        <div >
          <Stars rating={stars} />
          <p size="sm">{coment}</p>
        </div>
      </div>
      <div className=" img-name">
        <img src={image} alt="" />
        <div className="name-city">
          <h4 size="sm">{name}</h4>
          <p>{city}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
