import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Masonry from "react-responsive-masonry";
import { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./galleryImages";

const MemoryGallery = () => {
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
        <Masonry gutter="2rem">
          {galleryImages?.map((item, index) => {
            return (
              <LazyLoadImage
                className="masonry__img"
                src={item}
                alt=""
                key={index}
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "10px",
                }}
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MemoryGallery;
