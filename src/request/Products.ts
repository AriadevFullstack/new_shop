import shoes from '../assets/image 35.png';
import hat from '../assets/image 8.png';
import cap from '../assets/Frame 34.png';
import shirt from '../assets/Frame 38.png';
import gloves from '../assets/image 7.png';
import boot from '../assets/Frame 33.png';
import t_shirt from '../assets/image 9.png';
import glasses from '../assets/image 10.png';


import type { ProductType } from '../types/ProductType';



export const Products: ProductType[] = [
  {
    id: 1,
    productName: 'T-Shirt With Tape Details',
    price: 12000,
    productImage: shoes,
    rate: 2,
    disCount: 0,
  },
  {
    id: 2,
    productName: 'Skinny Fit Jeans',
    price: 50000,
    productImage: hat,
    rate: 5,
    disCount: 10,
  },
  {
    id: 3,
    productName: 'Checered Shirt',
    price: 20000,
    productImage: cap,
    rate: 2,
    disCount: 0,
  },
  {
    id: 4,
    productName: 'Sleeve Striped T-Shirt',
    price: 60000,
    productImage: shirt,
    rate: 3,
    disCount: 35,
  },
  {
    id: 5,
    productName: 'Verticall Striped Shirt',
    price: 12000,
    productImage: gloves,
    rate: 2,
    disCount: 0,
  },
  {
    id: 6,
    productName: 'Courage Graphic T-Shirt',
    price: 50000,
    productImage: boot,
    rate: 5,
    disCount: 10,
  },
  {
    id: 7,
    productName: 'Checered Shirt',
    price: 20000,
    productImage: t_shirt,
    rate: 2,
    disCount: 0,
  },
  {
    id: 8,
    productName: 'Loose Fit Bermuda Shorts',
    price: 60000,
    productImage: glasses,
    rate: 3,
    disCount: 35,
  },
];

export const getProducts =() =>{
  return Products 
}
