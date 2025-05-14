import React from "react";
import type { SectionProps } from "../../types/ProductType";

export const ProductSection: React.FC<SectionProps> = ({
  title,
  buttonText,
  children,
}) => {
  return (
    <section className="bg-white px-4 py-12">
      <div className="mb-10 text-center">
        <h2 className="text-[32px] font-semibold text-gray-900">{title}</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        {children}
      </div>

      <div className="mt-10 text-center">
        <button className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800">
          {buttonText}
        </button>
      </div>
    </section>
  );
};
