"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./styles.scss";
// import { Container } from './styles';

const MainBanner: React.FC = () => {
  return (
    <section className="main-banner">
      <Swiper
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <picture className="main-banner__slide">
            <source
              media="(max-width: 768px)"
              srcSet="/assets/images/banner-mob-1.png"
            />
            <source
              media="(min-width: 769px)"
              srcSet="/assets/images/banner-desk-1.png"
            />
            <img src="/assets/images/banner-desk-1.png" alt="Banner 1" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture className="main-banner__slide">
            <source
              media="(max-width: 768px)"
              srcSet="/assets/images/banner-mob-2.png"
            />
            <source
              media="(min-width: 769px)"
              srcSet="/assets/images/banner-desk-2.png"
            />
            <img src="/assets/images/banner-desk-2.png" alt="Banner 2" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture className="main-banner__slide">
            <source
              media="(max-width: 768px)"
              srcSet="/assets/images/banner-mob-3.png"
            />
            <source
              media="(min-width: 769px)"
              srcSet="/assets/images/banner-desk-3.png"
            />
            <img src="/assets/images/banner-desk-3.png" alt="Banner 3" />
          </picture>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MainBanner;
