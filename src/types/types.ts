export interface ProductsType {
  id: number;
  name: string;
  ingredents: string[];
  price: string;
  img: string;
  category_id: number;
  category_name: string;
}

export interface CategoriesType {
  id: number;
  name: string;
}