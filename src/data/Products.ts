import shoes from '../assest/download (1)-DjJal68F.jfif';
import hat from '../assest/download (2)-YS0pkkSH.jfif';
import cap from '../assest/download (3)-CGlUC57o.jfif';
import shirt from '../assest/download (4)-9n-pAne9.jfif';

import type { ProductType } from '../types/ProductType';



export const Products: ProductType[] = [
  {
    id: 1,
    productName: 'shoes',
    price: 12000,
    productImage: shoes,
    rate: 2,
    disCount: 0,
  },
  {
    id: 2,
    productName: 'hat',
    price: 50000,
    productImage: hat,
    rate: 5,
    disCount: 10,
  },
  {
    id: 3,
    productName: 'cap',
    price: 20000,
    productImage: cap,
    rate: 2,
    disCount: 0,
  },
  {
    id: 4,
    productName: 'shirt',
    price: 60000,
    productImage: shirt,
    rate: 2,
    disCount: 0,
  },
];
