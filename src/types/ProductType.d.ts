
export interface ProductType  {
  id: number;
  productName: string;
  price: number; 
  productImage: string;
  rate: number; 
  disCount: number; 
};

export interface  Props  {
  product: ProductType;
};

export interface SectionProps {
  title: string;
  buttonText: string;
  children: React.ReactNode;
}

