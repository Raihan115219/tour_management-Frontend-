import React from "react";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";
import { Col } from "reactstrap";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "lorem ipsum dolor sit amet, consectutor adipaksd",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "lorem ipsum dolor sit amet, consectutor adipaksd",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "lorem ipsum dolor sit amet, consectutor adipaksd",
  },
];

export const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};
