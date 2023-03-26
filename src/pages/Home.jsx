import React from "react";
import "../styles/home.css";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import experienceImg from "../assets/images/experience.png";
import worldImg from "../assets/images/world.png";
import { Col, Container, Row } from "reactstrap";
import SubTitle from "../shared/SubTitle";
import SearchBar from "../shared/SearchBar";
import { ServiceList } from "../Services/ServiceList";
import FeaturedToursList from "../Components/Featured-tours/FeaturedToursList";
import MemoryGallery from "../Components/image-gallery/MemoryGallery";
import { Testimonial } from "../Components/Testimonial/Testimonial";
import NewsLetter from "../shared/NewsLetter";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <SubTitle subtitle="Know before you go" />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                  quod, magnam ullam expedita quibusdam repellendus sapiente
                  blanditiis error debitis cum incidunt deserunt dolore, sed
                  nostrum.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <LazyLoadImage src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box  mt-5">
                <LazyLoadImage src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* After Hero section */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* featured Section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <SubTitle subtitle="Explore" />
              <h2 className="featured__tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedToursList />
          </Row>
        </Container>
      </section>
      {/* experience section start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <SubTitle subtitle="Experience" />
                <h2>
                  With our all Experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit <br />
                  iusto facilis magnam. Voluptate, veniam?
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>12</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* gallery section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <SubTitle subtitle="Gallery" />
              <h2 className="gallery__title">
                Visit our Customers tour Gallery
              </h2>
            </Col>
            <Col lg="12">
              <MemoryGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Testimonial Section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <SubTitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>
      {/* news letter start */}
      <NewsLetter />
    </>
  );
};

export default Home;
