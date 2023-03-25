import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick_Links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick_Links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <img src={logo} alt="" className="w-25 h-25" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
              quibusdam.
            </p>
            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <Link to="#">
                  <i class="ri-youtube-line" />
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-facebook-circle-line" />
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-github-fill" />
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-instagram-line" />
                </Link>
              </span>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick_Links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick_Links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6>
                  <span>
                    <i class="ri-map-pin-line"></i>
                    Address:
                  </span>
                </h6>
                <p className="mb-0">Rajshahi Bangladesh</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6>
                  <span>
                    <i class="ri-mail-line"></i>
                    Email:
                  </span>
                </h6>
                <p className="mb-0">demo@email.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6>
                  <span>
                    <i class="ri-phone-fill"></i>
                    Phone:
                  </span>
                </h6>
                <p className="mb-0">01*********</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12">
            <p className="coppyright">all rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
