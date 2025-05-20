import React from "react";
import type { BannerGridProps } from "../../types/ProductType";

interface ProductBannerGridProps extends BannerGridProps {
  title: string;
}

export const ProductBannerGrid: React.FC<ProductBannerGridProps> = ({
  title,
  items,
}) => {
  const gridStyles = [
    "lg:col-span-1 lg:row-span-1.5",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-start-2 lg:col-start-1",
    "lg:col-start-3 lg:row-start-2",
  ];

  return (
    <section className="container">
      <div className="mx-auto max-w-[1239px] rounded-xl bg-[#f3f3f3] p-5">
        <h2 className="mb-8 text-center text-2xl font-semibold text-gray-900">
          {title}
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {items.map((item, index) => (
            <div
              key={item.id || index}
              className={`relative col-span-1 row-span-1 overflow-hidden rounded-xl ${gridStyles[index] || ""}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-4 left-4 text-base font-semibold text-black">
                {item.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
