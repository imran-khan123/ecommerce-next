"use client"
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import '../swiper.css';
const Swiperslidecollection = ({ products }: { products: Product[] }) => {
  return (
      <div className='slider-main'>
        <Swiper modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}>

            {products.map((product)=> (
                <SwiperSlide key={product.handle}>
                <Link className="relative block h-full w-full"
              href={`/product/${product.handle}`}
              prefetch={true}>
                 <div className="slider-main">
                <Image
                  src={product.featuredImage?.url || "/placeholder.png"}
                  alt={product.title}
                  fill
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover rounded-lg"
                />
                <div className="info">
                  <h3>{product.title}</h3>
                  <p>
                    {product.priceRange.maxVariantPrice.amount}{" "}
                    {product.priceRange.maxVariantPrice.currencyCode}
                  </p>
                </div>
              </div>
                </Link>

                </SwiperSlide>

            ))}

          <SwiperSlide>
            
          </SwiperSlide>


        </Swiper>
      </div>
  )
}

export default Swiperslidecollection