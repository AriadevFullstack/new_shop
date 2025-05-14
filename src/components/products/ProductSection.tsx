import React from "react";
import type { SectionProps } from "../../types/ProductType";

export const ProductSection: React.FC<SectionProps> = ({
  title,
  buttonText,
  children,
}) => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-[32px] font-semibold text-gray-900">{title}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {children}
      </div>

      <div className="mt-10 text-center">
        <button className="px-6 py-3 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
          {buttonText}
        </button>
      </div>
    </section>
  );
};



