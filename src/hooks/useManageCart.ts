import { useToast } from "@chakra-ui/react";
import { CartItem } from "@customTypes/cart.type";
import { Product } from "@customTypes/product.type";

function useManageCart() {
  const toast = useToast();

  const getCartItems = (): CartItem[] => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  };

  const addToCart = (newItem: Product, count: number): void => {
    const currItems = getCartItems();

    const productIndex = currItems.findIndex(
      (item) => item.product.id === newItem.id
    );

    if (productIndex !== -1) {
      currItems[productIndex].count += count;
    } else {
      currItems.push({ product: newItem, count });
    }

    localStorage.setItem("cart", JSON.stringify(currItems));

    toast({
      status: "success",
      title: "Success",
      description: "Successfully added to cart",
    });
  };

  const increaseCartItemAmount = (productId: number) => {
    const currItems = getCartItems();

    const productIndex = currItems.findIndex(
      (item) => item.product.id === productId
    );

    currItems[productIndex].count += 1;

    localStorage.setItem("cart", JSON.stringify(currItems));
  };

  const decreaseCartItemAmount = (productId: number) => {
    const currItems = getCartItems();

    const productIndex = currItems.findIndex(
      (item) => item.product.id === productId
    );

    currItems[productIndex].count -= 1;

    localStorage.setItem("cart", JSON.stringify(currItems));
  };

  const deleteFromCart = (productId: number): void => {
    const currItems = getCartItems();

    const filteredItems = currItems.filter(
      (item) => item.product.id !== productId
    );

    localStorage.setItem("cart", JSON.stringify(filteredItems));

    toast({ status: "success" });
  };

  return {
    getCartItems,
    addToCart,
    deleteFromCart,
    increaseCartItemAmount,
    decreaseCartItemAmount,
  };
}

export default useManageCart;
