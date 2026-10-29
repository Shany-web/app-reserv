import React from "react";
import estilo5 from "../../../assets/gallery/estilo5.png";
import "./Prefooter.css";
import { Button } from "../../atoms/button/Button";
import { FaArrowRight } from "react-icons/fa6";
import { Icon } from "../../atoms/icons/Icon";

const Prefooter = () => {
  return (
    <div className="prefoot container">
      <img src={estilo5} alt="" />
      <div className="desc">
        <h3>Ready to Treat Yourself?</h3>
        <p>Book your appointment today and let us</p>
        <p>bring your nail goals to life!</p>
      </div>
      <div className="btn">
        <Button variant="primary" className="button">
          BOOK AN APPOINTMENT <FaArrowRight />{" "}
        </Button>
        <div className="phone">
          <Icon name={"phone"} size={15} decorative />
          <p>(111) 222333444</p>
        </div>
      </div>
    </div>
  );
};

export default Prefooter;
