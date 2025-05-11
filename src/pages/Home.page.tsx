
import { Products } from "../data/Products"; 
import type { ProductType } from "../types/ProductType";
import ProductCard from "../components/products/ProductCard"; 

export default function Home() {
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">محصولات</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Products.map((product: ProductType) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

