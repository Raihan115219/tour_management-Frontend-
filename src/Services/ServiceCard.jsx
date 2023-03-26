import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./service-card.css";

const ServiceCard = ({ item }) => {
  const { imgUrl, title, desc } = item;

  return (
    <div className="service__item">
      <div className="service__img">
        <LazyLoadImage src={imgUrl} alt="" effect="opacity" />
      </div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
};

export default ServiceCard;
