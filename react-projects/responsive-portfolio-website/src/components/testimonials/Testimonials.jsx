import React from "react";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Testimonials.css";

const data = [
  {
    id: 1,
    avatar: AVATAR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ratione placeat cumque vero tempore quam expedita nulla commodi voluptatem, nostrum ab reiciendis error atque saepe sed possimus odio in! Nam fugiat ipsa sequi hic magni, nihil cumque necessitatibus magnam! Nobis fugit, recusandae quos deleniti adipisci odio nesciunt dolores quibusdam natus. Dolore quibusdam quod est vero, dicta aut. Provident, sit!",
  },
  {
    id: 2,
    avatar: AVATAR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ratione placeat cumque vero tempore quam expedita nulla commodi voluptatem, nostrum ab reiciendis error atque saepe sed possimus odio in! Nam fugiat ipsa sequi hic magni, nihil cumque necessitatibus magnam! Nobis fugit, recusandae quos deleniti adipisci odio nesciunt dolores quibusdam natus. Dolore quibusdam quod est vero, dicta aut. Provident, sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, culpa?",
  },
  {
    id: 3,
    avatar: AVATAR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ratione placeat cumque vero tempore quam expedita nulla commodi voluptatem, nostrum ab reiciendis error atque saepe sed possimus odio in! Nam fugiat ipsa sequi hic magni, nihil cumque necessitatibus magnam! Nobis fugit, recusandae quos deleniti adipisci odio nesciunt dolores quibusdam natus.",
  },
  {
    id: 4,
    avatar: AVATAR4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ratione placeat cumque vero tempore quam expedita nulla commodi voluptatem.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((review) => (
          <SwiperSlide className="testimonial" key={review.id}>
            <div className="client__avatar">
              <img src={review.avatar} alt={`avatar ${review.id}`} />
            </div>
            <h5 className="client__name">{review.name}</h5>
            <small className="client__review">{review.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
