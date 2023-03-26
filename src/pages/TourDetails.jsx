import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/tour-details.css";
import { Container, Row, Form, ListGroup, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import avater from "../assets/images/avatar.jpg";
import { Booking } from "../Components/Booking/Booking";
import NewsLetter from "../shared/NewsLetter";
import useFetch from "./../hooks/useFetch.js";
import { BASE_URL } from "../utils/config.js";
import { AuthContext } from "./../context/AuthContext";
import { LazyLoadImage } from "react-lazy-load-image-component";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  // fetch data from DB
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    distance,
    maxGroupSize,
    address,
  } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  // date format
  const options = { day: "numeric", month: "long", year: "numeric" };

  // submit requ to sever
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please sign in first");
      }
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };
      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });
      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }

      alert(result.message);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, [tour]);
  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center py-3">Loading......</h4>}
          {error && <h4 className="text-center py-3">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <LazyLoadImage src={photo} alt="" effect="opacity" />
                  <div className="tour__info">
                    <h2>{title}</h2>
                    <div className="d-flex align-items-center gap-5">
                      <span className="rating d-flex align-items-center gap-1">
                        <i
                          class="ri-star-fill"
                          style={{ color: "var(--secondary-color)" }}
                        />
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "not rated"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>

                      <span>
                        <i className="ri-map-pin-fill">{address}</i>
                      </span>
                    </div>
                    <div className="tour__extra-details">
                      <span>
                        <i class="ri-map-pin-2-line">{city}</i>
                      </span>
                      <span>
                        <i class="ri-money-dollar-circle-line"> {price}</i>/per
                        price
                      </span>
                      <span>
                        <i class="ri-map-pin-time-line"> </i> {distance} k/m
                      </span>

                      <span>
                        <i class="ri-group-line"> </i> {maxGroupSize} People
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p> {desc}</p>
                  </div>
                  {/* Tour reviews  start */}
                  <div className="tour__reviews mt-4">
                    <h4>Reviews ({reviews?.length})</h4>
                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span onClick={() => setTourRating(1)}>
                          1<i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(2)}>
                          2<i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(3)}>
                          3<i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(4)}>
                          4<i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(5)}>
                          5<i class="ri-star-s-fill"></i>
                        </span>
                      </div>
                      <div className="review__input">
                        <input
                          ref={reviewMsgRef}
                          type="text"
                          placeholder="write a review.........."
                          required
                        />
                        <button className="btn primary__btn" type="submit">
                          Submit
                        </button>
                      </div>
                    </Form>
                    <ListGroup className="user__reviews">
                      {reviews?.map((review, index) => {
                        return (
                          <div className="review__item">
                            <img src={avater} alt="" />
                            <div className="w-100">
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <h5>{review?.username}</h5>
                                  <p>
                                    {new Date(
                                      review.createdAt
                                    ).toLocaleDateString("en-US", options)}
                                  </p>
                                </div>
                                <span className="d-flex align-items-center">
                                  {review.rating}
                                  <i class="ri-star-s-fill"></i>
                                </span>
                              </div>
                              <h6>{review?.reviewText}</h6>
                            </div>
                          </div>
                        );
                      })}
                    </ListGroup>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default TourDetails;
