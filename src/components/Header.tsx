import {
  Box,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <Box bg="gray.700">
      <Flex
        position="sticky"
        px={10}
        py={6}
        alignItems="center"
        color="white"
        maxW="container.xl"
        mx="auto"
        columnGap={4}
        justifyContent="space-between"
      >
        <Box>SIMPLE SHOP</Box>

        <InputGroup w="60%">
          <Input placeholder="Cari barang di Simple Shop" />
          <InputRightElement>
            <Icon as={AiOutlineSearch} fontSize="2xl" />
          </InputRightElement>
        </InputGroup>

        <IconButton
          icon={<AiOutlineShoppingCart />}
          aria-label="cart"
          variant="unstyled"
          fontSize="2xl"
        />
      </Flex>
    </Box>
  );
};

export default Header;
