import React from "react";
import { Button } from "../../atoms/button/Button";
import { FaArrowRight } from "react-icons/fa6";
import oferta from "../../../assets/oferta.png";
import logoferta from "../../../assets/logoferta.png";
import "./Oferta.css";

const Oferta = () => {
  return (
    <div
      className="oferta container"
      style={{ backgroundImage: `url(${oferta})` }}
    >
      <div className="logo ">
        <img src={logoferta} alt="" />
        <div>
          <h3>New Client Offer</h3>
          <h3 className="descount">20% Off</h3>
          <h3>On Your First Visit</h3>
          <div className="paragraph">
            <p>Treat Yourself To Beautiful Now.</p>
            <p>You deserve it.</p>
          </div>
        </div>
      </div>
      <div>
        <Button
          variant="secondary"
          style={{ color: "white", borderColor: "#b4a456" }}
        >
          BOOK NOW <FaArrowRight />{" "}
        </Button>
        <div className="paragraph">
          <p>Limited time offer</p>
          <p>Offer valid for new client only</p>
        </div>
          </div>
    </div>
  );
};

export default Oferta;
