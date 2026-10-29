import React from "react";
import HeaderLinks from "../../organisms/headerLinks/HeaderLinks";

const Footer = () => {
  return (
    <div>
      <div className="img-text ">
        <img src={flor} alt="" />
        <div>
          <h2>Polish & glow</h2>
          <p>nail salon</p>
        </div>
        <p>asdrtyuifghjcvbncvbcvbdrthb</p>
        <p>awertyhbvcdrtyhbvcrtyhbvcthg</p>
        <p>vcftyujbvftyjnbvgjnbghjhghh</p>
      </div>
      <div>
        <h5>QUICK LINKS</h5>
        <ul className="links">
          <li>
            <a href="#">HOME</a>
            <a href="#">SERVICES</a>
            <a href="#">GALLERIE</a>
            <a href="#">PRICING</a>
            <a href="#">ABOUT US</a>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
