import React from "react";
import { Card } from "../../molecules/card/Card";
import "./ServicesSection.css";
import manicureImg from "../../../assets/manicureImg.png";
import pedicureImg from "../../../assets/pedicureImg.png";
import nailArtImg from "../../../assets/nailArtImg.png";
import acrilicImg from "../../../assets/acrilicImg.png";
import lashImg from "../../../assets/lashImg.png";

const services = [
  {
    id: 1,
    image: manicureImg,
    iconName: "manicure",
    learnMoreIcon: "arrow",
    title: "MANICURE",
    description: "Classic manicure...",
    link: "/learn more",
  },
  {
    id: 2,
    image: pedicureImg,
    iconName: "pedicure",
    learnMoreIcon: "arrow",
    title: "PEDICURE",
    description: "...",
    link: "/learn more",
  },
  {
    id: 3,
    image: acrilicImg,
    iconName: "gelPolish",
    learnMoreIcon: "arrow",
    title: "GEL POLISH",
    description: "...",
    link: "learn more",
  },
  {
    id: 4,
    image: nailArtImg,
    iconName: "art",
    learnMoreIcon: "arrow",
    title: "NAIL ART",
    description: "...",
    link: "/learn more",
  },
  {
    id: 5,
    image: acrilicImg,
    iconName: "acrilic",
    learnMoreIcon: "arrow",
    title: "ACRILIC NAILS",
    description: "...",
    link: "/learn more",
  },
  {
    id: 6,
    image: lashImg,
    iconName: "lash",
    learnMoreIcon: "arrow",
    title: "LASH SERVICES",
    description: "...",
    link: "/learn more",
  },
];

export const ServicesSection = () => {
  return (
    <section className="services-section container">
      {services.map((service) => (
        <Card key={service.id} {...service} />
      ))}
    </section>
  );
};
