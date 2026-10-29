import React from "react";
import { Icon } from "../../atoms/icons/Icon";
import salon from "../../../assets/salon.png";
import { Button } from "../../atoms/button/Button";
import { FaArrowRight } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="img-about container">
        <img src={salon} alt="" />
        <div className="aboutUs">
          <p className="about-color">ABOUT US</p>
          <h2>Where Beauty Meets </h2>
          <h2 className="about-color">Relaxation</h2>
          <p>................</p>
          <div className="icon-text">
            <div className="icon-p">
              <Icon name={"lotus"} size={42} decorative />
              <div>
                <h4>Hygiene First</h4>
                <p>We follow strict </p>
                <p>sanitation protocols</p>
              </div>
            </div>
            <div className="icon-p">
              <Icon name={"premiumProduct"} size={42} decorative />
              <div>
                <h4>Premium products</h4>
                <p>High-quality products</p>
                <p>for lasting results</p>
              </div>
            </div>
            <div className="icon-p">
              <Icon name={"experience"} size={42} decorative />
              <div>
                <h4>Experienced Pros</h4>
                <p>High-quality products</p>
                <p>for lasting results</p>
              </div>
            </div>
          </div>
          <Button variant="primary">
            LEARN MORE ABOUT US <FaArrowRight />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
