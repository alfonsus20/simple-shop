import { Text, VStack } from "@chakra-ui/react";
import CartCard from "@components/CartCard";
import Layout from "@components/Layout";
import { useCartContext } from "src/context/CartContext";

const Cart = () => {
  const { cartItems } = useCartContext();

  return (
    <Layout title="Cart">
      {cartItems.length > 0 ? (
        <VStack spacing={6} alignItems="stretch">
          {cartItems.map((item, index) => (
            <CartCard {...item} key={index} />
          ))}
        </VStack>
      ) : (
        <Text textAlign="center" fontSize="2xl" fontWeight="semibold" my={5}>
          Cart is empty
        </Text>
      )}
    </Layout>
  );
};

export default Cart;
