"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderone from "../public/assets/images/slider-one.webp";
import slidertwo from "../public/assets/images/slider-two.webp";

const Heropanel = () => {
  return (
    <div className="swiper-slider">
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="swiper-slider-image">
            <div className="slider-inner-content relative">
              <Image src={sliderone} alt="sliderimage" className="w-full" />
              <Link
                href="/home?sort=latest"
                className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[rgb(159,192,235)] text-white px-15 py-3 rounded-full"
              >
                New Arrivals
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slider-image">
            <div className="slider-inner-content">
              <Image src={slidertwo} alt="sliderimage" className="w-full" />
              <Link
                href="/home?sort=default"
                className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white px-10 py-3 rounded-full border border-white"
              >
                New Shop
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <div className="custom-pagination"></div>
        <div className="navigation relative">
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Heropanel;
