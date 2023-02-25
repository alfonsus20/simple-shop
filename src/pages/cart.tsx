import { VStack } from "@chakra-ui/react";
import CartCard from "@components/CartCard";
import Layout from "@components/Layout";
import { useCartContext } from "src/context/CartContext";

const Cart = () => {
  const { cartItems } = useCartContext();

  return (
    <Layout title="Cart">
      <VStack spacing={6} alignItems='stretch'>
        {cartItems.map((item, index) => (
          <CartCard {...item} key={index} />
        ))}
      </VStack>
    </Layout>
  );
};

export default Cart;
