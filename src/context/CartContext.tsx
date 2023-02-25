import { useToast } from "@chakra-ui/react";
import { CartItem } from "@customTypes/cart.type";
import { Product } from "@customTypes/product.type";
import { createContext, useContext, useEffect, useState } from "react";

type CartContextType = {
  cartItems: CartItem[];
  deleteCartItem: (_: number) => void;
  increaseCartItemQuantity: (_: number) => void;
  decreaseCartItemQuantity: (_: number) => void;
  addToCart: (_: Product, _2: number) => void;
};

const CartContext = createContext<CartContextType>({
  cartItems: [],
  deleteCartItem: () => {},
  increaseCartItemQuantity: () => {},
  decreaseCartItemQuantity: () => {},
  addToCart: () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const toast = useToast();

  const addToCart = (newItem: Product, count: number): void => {
    const copiedCartItems = deepClone(cartItems);
    const productIndex = copiedCartItems.findIndex(
      (item) => item.product.id === newItem.id
    );

    if (productIndex !== -1) {
      copiedCartItems[productIndex].count += count;
    } else {
      copiedCartItems.push({ product: newItem, count });
    }

    setCartItems(copiedCartItems);
    
    localStorage.setItem("cart", JSON.stringify(copiedCartItems));

    toast({
      status: "success",
      title: "Success",
      description: "Item was successfully added to cart",
    });
  };

  const increaseCartItemQuantity = (productId: number) => {
    const copiedCartItems = deepClone(cartItems);

    const productIndex = copiedCartItems.findIndex(
      (item) => item.product.id === productId
    );

    copiedCartItems[productIndex].count += 1;

    setCartItems(copiedCartItems);

    localStorage.setItem("cart", JSON.stringify(copiedCartItems));
  };

  const decreaseCartItemQuantity = (productId: number) => {
    const copiedCartItems = deepClone(cartItems);

    const productIndex = copiedCartItems.findIndex(
      (item) => item.product.id === productId
    );

    copiedCartItems[productIndex].count -= 1;

    setCartItems(copiedCartItems);

    localStorage.setItem("cart", JSON.stringify(copiedCartItems));
  };

  const deleteCartItem = (productId: number): void => {
    const filteredItems = cartItems.filter(
      (item) => item.product.id !== productId
    );

    setCartItems(filteredItems);

    localStorage.setItem("cart", JSON.stringify(filteredItems));

    toast({
      status: "success",
      description: "Item was successfully removed from cart",
    });
  };

  const deepClone = <T extends unknown>(data: T): T => {
    return JSON.parse(JSON.stringify(data));
  };

  const getCartItemsFromLocalStorage = (): CartItem[] => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  };

  useEffect(() => {
    setCartItems(getCartItemsFromLocalStorage());
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        increaseCartItemQuantity,
        decreaseCartItemQuantity,
        deleteCartItem,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCartContext = () => useContext(CartContext);
