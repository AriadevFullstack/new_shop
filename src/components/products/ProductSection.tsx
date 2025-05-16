import React from "react";
import type { SectionProps } from "../../types/ProductType";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export const ProductSection: React.FC<SectionProps> = ({
  title,
  buttonText,
  children,
}) => {
  return (
    <section className="my-10">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={16}
          slidesPerView= {1.3}
          breakpoints={{
            480: {
              slidesPerView: 2.3,
            },
            768: {
              slidesPerView: 3.3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="!px-2"
        >
          {React.Children.map(children, (child, i) => (
            <SwiperSlide key={i}>{child}</SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-6 text-center">
        <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

