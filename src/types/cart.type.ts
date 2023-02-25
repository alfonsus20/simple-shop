import { Product } from "@customTypes/product.type";

export type CartItem = {
  product: Product;
  count: number;
};
