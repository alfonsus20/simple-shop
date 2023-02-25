import { Box, Circle, Flex, IconButton } from "@chakra-ui/react";
import Link from "next/link";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartContext } from "src/context/CartContext";

const Header = () => {
  const { cartItems } = useCartContext();

  return (
    <Box bg="gray.700" position="sticky" top={0} zIndex={10}>
      <Flex
        px={10}
        py={{ base: 4, md: 6 }}
        alignItems="center"
        color="white"
        maxW="container.xl"
        mx="auto"
        columnGap={4}
        justifyContent="space-between"
      >
        <Box as={Link} href="/">
          SIMPLE SHOP
        </Box>

        <Link href="/cart">
          <Box pos="relative">
            <IconButton
              icon={<AiOutlineShoppingCart />}
              aria-label="cart"
              variant="unstyled"
              fontSize="2xl"
            />
            {cartItems.length > 0 && (
              <Circle
                position="absolute"
                top={0}
                right={1}
                bg="red"
                size="18px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="full"
                fontSize="xs"
              >
                {cartItems.length}
              </Circle>
            )}
          </Box>
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
