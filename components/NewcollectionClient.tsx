"use client";

import { Product } from "lib/shopify/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function NewcollectionClient({ products }: { products: Product[] }) {
  return (
    <div className="swiper-collection">
      <div className="collection-title">NEW In</div>

      <Swiper
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".collection-swipern",
          clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={4}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="swiper-content">
              <div className="image">
                <img src={item.featuredImage?.url} alt={item.title} />
              </div>
              <div className="pricing-detail">
                <div className="title">{item.title}</div>
                <div className="pricing">
                  {item.priceRange.maxVariantPrice.amount}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
