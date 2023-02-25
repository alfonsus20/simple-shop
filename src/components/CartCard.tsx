import { Box, Flex, IconButton, Image, Input, Text } from "@chakra-ui/react";
import { CartItem } from "@customTypes/cart.type";

import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { useCartContext } from "src/context/CartContext";

const CartCard = ({ product, count }: CartItem) => {
  const { increaseCartItemQuantity, decreaseCartItemQuantity, deleteCartItem } =
    useCartContext();

  return (
    <Box>
      <Flex gap={4}>
        <Image src={product.image} w={32} h={32} alt={product.title} />
        <Flex flexDir="column" flex={1} justifyContent="space-between">
          <Box>
            <Text noOfLines={{ base: 1, lg: 2 }} fontSize="xl">
              {product.title}
            </Text>
            <Text fontWeight="semibold" fontSize="lg">
              ${product.price}
            </Text>
          </Box>
          <Flex justifyContent="flex-end" gap={6}>
            <IconButton
              icon={<FaTrash />}
              aria-label="remove"
              colorScheme="red"
              onClick={() => deleteCartItem(product.id)}
            />
            <Flex gap={2}>
              <IconButton
                icon={<FaMinus />}
                variant="outline"
                aria-label="decrease"
                isDisabled={count < 2}
                onClick={() => decreaseCartItemQuantity(product.id)}
              />
              <Input maxW={16} value={count} textAlign="center" />
              <IconButton
                icon={<FaPlus />}
                variant="outline"
                aria-label="increase"
                onClick={() => increaseCartItemQuantity(product.id)}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CartCard;
