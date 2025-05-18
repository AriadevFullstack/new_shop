import React from "react";
import type { SectionProps } from "../../types/ProductType";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export const ProductSection: React.FC<SectionProps> = ({
  title,
  buttonText,
  children,
}) => {
  return (
    <section className="container">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={16}
          slidesPerView={1.3}
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
        <button className="rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800">
          {buttonText}
        </button>
      </div>
    </section>
  );
};
