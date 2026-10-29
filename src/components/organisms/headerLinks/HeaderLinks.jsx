import React from "react";
import { Title } from "../../atoms/Title";
import flor from "../../../assets/flor.png";
import "./HeaderLinks.css";
import { Button } from "../../atoms/button/Button";

const HeaderLinks = () => {
  return (
    <div className="header-linkback">
      <div className="header-link container">
        <div className="img-text ">
          <img src={flor} alt="" />
          <div>
            <h2>Polish & glow</h2>
            <p>nail salon</p>
          </div>
        </div>
        <div className="links">
          <ul className="links">
            <li>
              <a href="#">HOME</a>
              <a href="#">SERVICES</a>
              <a href="#">GALLERIE</a>
              <a href="#">PRICING</a>
              <a href="#">ABOUT US</a>
              <a href="#">REVIEWS</a>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
        <Button variant="primary">BOOK NOW</Button>
      </div>
    </div>
  );
};

export default HeaderLinks;
