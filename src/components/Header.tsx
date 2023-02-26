import { Box, Circle, Flex, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartContext } from "src/context/CartContext";
import Logo from "../../public/logo.png";

const Header = () => {
  const { cartItems } = useCartContext();

  return (
    <Box bg="gray.700" shadow="md" position="sticky" top={0} zIndex={10}>
      <Flex
        px={10}
        py={{ base: 4 }}
        alignItems="center"
        color="white"
        maxW="container.xl"
        mx="auto"
        columnGap={4}
        justifyContent="space-between"
      >
        <Flex
          alignItems="center"
          flexDir="column"
          textAlign="center"
          as={Link}
          href="/"
        >
          <Box
            position="relative"
            w={{ base: 16, md: 20 }}
            style={{ aspectRatio: 4 / 3 }}
          >
            <Image src={Logo} alt="logo" objectFit="contain" layout="fill" />
          </Box>
          <Text fontWeight="semibold" display={{ base: "none", md: "block" }}>
            Simple Shop
          </Text>
        </Flex>
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
