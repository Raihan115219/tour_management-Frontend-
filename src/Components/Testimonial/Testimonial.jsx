import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

export const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3 border border-lg ">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
          tenetur amet cumque vero fuga laudantium voluptatibus, explicabo
          similique rerum dolore quaerat quia iusto itaque quibusdam? Molestias
          voluptate tempora neque. Optio, quisquam itaque in ex praesentium,
          doloribus, molestiae accusantium quas sunt reprehenderit voluptatem
          velit eius dicta?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <LazyLoadImage src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
          tenetur amet cumque vero fuga laudantium voluptatibus, explicabo
          similique rerum dolore quaerat quia iusto itaque quibusdam? Molestias
          voluptate tempora neque. Optio, quisquam itaque in ex praesentium,
          doloribus, molestiae accusantium quas sunt reprehenderit voluptatem
          velit eius dicta?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <LazyLoadImage src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
          tenetur amet cumque vero fuga laudantium voluptatibus, explicabo
          similique rerum dolore quaerat quia iusto itaque quibusdam? Molestias
          voluptate tempora neque. Optio, quisquam itaque in ex praesentium,
          doloribus, molestiae accusantium quas sunt reprehenderit voluptatem
          velit eius dicta?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <LazyLoadImage src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};
