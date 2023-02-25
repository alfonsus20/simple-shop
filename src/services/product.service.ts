import { Product } from "@customTypes/product.type";
import api from "@utils/api";
import { AxiosResponse } from "axios";

export const getProductList = (): Promise<AxiosResponse<Product[]>> =>
  api.get("/products");

export const getProductDetail = (id: string): Promise<AxiosResponse<Product>> =>
  api.get(`/products/${id}`);
