import  { useState } from "react";
import type { ProductType } from "../../types/ProductType";
import  { Star } from "lucide-react";

type Props = {
  product: ProductType;
};

export default function ProductCard({ product }: Props) {
  const { productName, price, productImage, disCount } = product;

 
  const [rate, setRate] = useState<number>(product.rate);

  const finalPrice = disCount
    ? Math.round(price - (price * disCount) / 100)
    : price;

  return (
    <div className="border p-4 rounded shadow flex flex-col items-center">
      <img
        src={productImage}
        alt={productName}
        className="w-full h-48 object-cover mb-3 rounded"
      />
      <h2 className="text-lg font-semibold mb-1">{productName}</h2>

    
      <div className="flex mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setRate(i + 1)}
            className="focus:outline-none"
          >
            <Star
              className={`w-5 h-5 ${
                i < rate ? "text-yellow-400" : "text-gray-300"
              }`}
              fill={i < rate ? "#facc15" : "none"}
            />
          </button>
        ))}
      </div>

     
      <div className="mb-2 text-center">
        {disCount > 0 ? (
          <>
            <span className="text-sm text-gray-400 line-through ml-2">
              {price.toLocaleString()} تومان
            </span>
            <span className="text-lg font-bold text-red-600">
              {finalPrice.toLocaleString()} تومان
            </span>
            <div className="text-green-600 text-sm mt-1">
              {disCount}% تخفیف ویژه
            </div>
          </>
        ) : (
          <span className="text-lg font-bold text-gray-800">
            {price.toLocaleString()} تومان
          </span>
        )}
      </div>
    </div>
  );
}

