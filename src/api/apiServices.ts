import { Axios } from "./api";
import { CategoriesType, ProductsType } from "../types/types";

export const getMenu = async (): Promise<ProductsType[]> => {
  const { data } = await Axios.get("/menu");
  return data;
};

export const getCategories = async (): Promise<CategoriesType[]> => {
  const { data } = await Axios.get("/categories");
  return data;
};
