import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../styles/newsLetter.css";
import maleTourist from "../assets/images/male-tourist.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling destination</h2>
              <div className="newsletter__input">
                <input type="text" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                eius possimus facilis animi similique qui!
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <LazyLoadImage src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
