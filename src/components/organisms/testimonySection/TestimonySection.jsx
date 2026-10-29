import React from "react";
import pedicureImg from "../../../assets/pedicureImg.png";
import TestimonialCard from "../../molecules/testimonialCard/TestimonialCard";
import "./TestimonySection.css";

const testimonies = [
  {
    id: 1,
    iconName: "quote",
    stars: 4,
    coment: "Good Service",
    image: pedicureImg,
    name: "Karla",
    city: "orlando fl",
  },
  {
    id: 2,
    iconName: "quote",
    stars: 3,
    coment: "Good Service",
    image: pedicureImg,
    name: "Shany",
    city: "orlando fl",
  },
  {
    id: 3,
    iconName: "quote",
    stars: 2,
    coment: "bad Service",
    image: pedicureImg,
    name: "Ya",
    city: "orlando fl",
  },
  {
    id: 3,
    iconName: "quote",
    stars: 5,
    coment: "Good Service i'll come back.",
    image: pedicureImg,
    name: "Amelie",
    city: "orlando fl",
  },
];

const TestimonySection = () => {
  return (
    <section className="testimony-section container">
      {testimonies.map((testimony) => (
        <TestimonialCard key={testimony.id} {...testimony} />
      ))}
    </section>
  );
};

export default TestimonySection;
