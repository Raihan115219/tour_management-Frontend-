import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import { useLocation } from "react-router-dom";
import TourCard from "../shared/TourCard";
import NewsLetter from "../shared/NewsLetter";

const SearchResultList = () => {
  const location = useLocation();
  const [data] = useState(location.state);
  console.log(data);
  return (
    <div>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No tour found</h4>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </div>
  );
};

export default SearchResultList;
