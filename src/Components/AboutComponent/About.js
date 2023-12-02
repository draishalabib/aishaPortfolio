import React from "react";
// import { IntlProvider, FormatMessage } from "react-intl";
import { Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/swiper-bundle.min.css";
import "./About.css";

export default function About(props) {
  return (
    <div id="about">
      <Swiper
        modules={[Pagination]}
        effect="fade"
        spaceBetween={40}
        slidesPerView={1}
        Pagination={{ clickable: true }}
      >
        {props.about.map(({ image }, index) => {
          return (
            <SwiperSlide key={index} id="slider">
              <div className="image">
                <img src={image} alt="image" className="slider_image" />
              </div>
              <div id="slider-text">
                <h1>About Me!</h1>
                <p>
                  i'm ᗩIᔑHᗩ a tunision based web Designer , web-developer & user
                  friendly experience, i'm passionate about building excellent
                  sites that improves the lives of those around me,i love to
                  build amazing apps.
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
