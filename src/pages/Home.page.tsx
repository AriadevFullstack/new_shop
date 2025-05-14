import { ProductSection } from "../components/products/ProductSection";
import { getProducts } from "../request/Products";
import { ProductCard } from "../components/products/ProductCard";

export const Home = () => {
  const products = getProducts();

  return (
    <main className="bg-white">
      <ProductSection title="New Arrivals" buttonText="View All">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductSection>

      <ProductSection title="Top Selling" buttonText="View All">
        {products.slice(4, 8).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductSection>
    </main>
  );
};
