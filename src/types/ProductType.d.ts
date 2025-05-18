export interface Props {
  product: ProductType;
}

export interface SectionProps {
  title: string;
  buttonText: string;
  children: React.ReactNode;
}

export interface BannerItem {
  id: number;
  image: string;
  alt: string;
}

export interface BannerGridProps {
  items: BannerItem[];
}
