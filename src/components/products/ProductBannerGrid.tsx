import React from "react";
import type { BannerGridProps } from "../../types/ProductType";

interface ProductBannerGridProps extends BannerGridProps {
  title: string;
}

export const ProductBannerGrid: React.FC<ProductBannerGridProps> = ({
  title,
  items,
}) => {
  return (
    <section className="container">
      <div className="mx-auto max-w-[1239px] rounded-xl bg-[#f3f3f3] p-5">
        <h2 className="mb-8 text-center text-2xl font-semibold text-gray-900">
          {title}
        </h2>

        <div className="grid grid-cols-1 grid-rows-4 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          <div className="lg:row-span-1.5 relative col-span-1 row-span-1 overflow-hidden rounded-xl lg:col-span-1">
            <img
              src={items[0].image}
              alt={items[0].alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 text-base font-semibold text-black">
              {items[0].alt}
            </div>
          </div>

          <div className="relative col-span-1 row-span-1 overflow-hidden rounded-xl lg:col-span-2 lg:row-span-1">
            <img
              src={items[1].image}
              alt={items[1].alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 text-base font-semibold text-black">
              {items[1].alt}
            </div>
          </div>

          <div className="relative col-span-1 row-span-1 overflow-hidden rounded-xl lg:col-span-2 lg:col-start-1 lg:row-start-2">
            <img
              src={items[2].image}
              alt={items[2].alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 text-base font-semibold text-black">
              {items[2].alt}
            </div>
          </div>

          <div className="relative col-span-1 row-span-1 overflow-hidden rounded-xl lg:col-start-3 lg:row-start-2">
            <img
              src={items[3].image}
              alt={items[3].alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 text-base font-semibold text-black">
              {items[3].alt}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
