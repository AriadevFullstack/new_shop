import type { ProductCard as ProductCardInterface } from "./IProductCard";
import { Star } from "lucide-react";

export const ProductCard = ({
  disCount,
  price,
  productImage,
  productName,
  rate,
}: ProductCardInterface) => {
  const finalPrice = disCount
    ? Math.round(price - (price * disCount) / 100)
    : price;

  return (
    <div className="flex items-center justify-center">
      <div className="flex h-auto w-[295px] flex-col justify-between sm:h-[408px] sm:w-[48%] md:w-[295px]">
        <div className="mb-4">
          <img
            src={productImage}
            alt={productName}
            className="h-[298px] w-full rounded-xl object-cover"
          />
        </div>

        <div className="line-clamp-2">
          <h2 className="mb-2 h-[27px] text-[18px] font-semibold text-gray-900">
            {productName}
          </h2>

          <div className="mb-2 flex h-[20px] items-center gap-[4px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < rate ? "text-yellow-400" : "text-gray-300"
                }`}
                fill={i < rate ? "#facc15" : "none"}
              />
            ))}
          </div>

          <div className="mb-2 flex h-[32px] w-full items-center gap-2">
            {disCount > 0 ? (
              <>
                <span className="text-sm text-gray-400 line-through">
                  {price.toLocaleString()} $
                </span>
                <span className="text-lg font-bold text-red-600">
                  {finalPrice.toLocaleString()} $
                </span>
                <span className="text-sm text-green-600">{disCount}%</span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-800">
                {price.toLocaleString()} $
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
