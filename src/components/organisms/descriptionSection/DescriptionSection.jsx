import React from "react";
import { Button } from "../../atoms/button/Button";
import { FaArrowRight } from "react-icons/fa";
import { HeaderItem } from "../../molecules/headerItem/HeaderItem";
import back from "../../../assets/back.png";
import "./DescriptionSection.css";

const DescriptionSection = () => {
  return (
    <div className="description" style={{ backgroundImage: `url(${back})` }}>
      <div className="desc-section container">
        <p className="p1">BEAUTY AT YOUR FINGERS</p>
        <div className="desc-h1">
          <h1>Flawless Nails.</h1>
          <h1>Every Time.</h1>
        </div>
        <div className="desc-p">
          <p>Profesionals nail care in a relaxing luxury environment.</p>
          <p>Because you deserve to look and feel amazing.</p>
        </div>

        <div className="btn">
          <Button variant="primary">
            BOOK AN APPOINTMENT <FaArrowRight />{" "}
          </Button>
          <Button variant="secondary">OUR SERVICES</Button>
        </div>
        <div className="icono">
          <HeaderItem iconName="sanitized" text="Sanitized Tools." />
          <HeaderItem iconName="premium" text="Premium Products." />
          <HeaderItem iconName="heart" text="Skilled Technicians." />
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
