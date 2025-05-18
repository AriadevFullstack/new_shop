import banner1 from "../assets/image 11.png";
import banner2 from "../assets/image 13.png";
import banner3 from "../assets/image 12.png";
import banner4 from "../assets/image 14.png";

export const ProductBanner = [
  { id: 1, image: banner1, alt: "Men's Collection" },
  { id: 2, image: banner2, alt: "Women's Collection" },
  { id: 3, image: banner3, alt: "Accessories" },
  { id: 4, image: banner4, alt: "Shoes" },
];

export const getProductBanner = () => {
  return ProductBanner;
};
