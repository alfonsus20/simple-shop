import { useToast } from "@chakra-ui/react";
import { Product } from "@customTypes/product.type";

function useManageCart() {
  const toast = useToast();

  const getCartItems = (): Product[] => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  };

  const addToCart = (newItem: Product): void => {
    const currItems = getCartItems();

    currItems.push(newItem);

    localStorage.setItem("cart", JSON.stringify(currItems));

    toast({
      status: "success",
      title: "Success",
      description: "Successfully added to cart",
    });
  };

  const deleteFromCart = (): void => {
    toast({ status: "success" });
  };

  return { getCartItems, addToCart, deleteFromCart };
}

export default useManageCart;
