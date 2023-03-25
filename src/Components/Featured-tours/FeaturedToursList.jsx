import React from "react";
import { Col } from "reactstrap";
import TourCard from "../../shared/TourCard";
import useFetch from "./../../hooks/useFetch.js";
import { BASE_URL } from "./../../utils/config.js";

const FeaturedToursList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeatured`);

  console.log(featuredTours);
  return (
    <>
      {loading && <h4>Loading..............</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        featuredTours?.map((tour, index) => (
          <Col lg="3" md="6" sm="6" className="mb-4" key={index}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedToursList;
