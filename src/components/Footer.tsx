import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.700" color="white">
      <Box maxW="container.lg" mx="auto" textAlign="center" py={4}>
        Developed with <Text color="red.500" as='span'>♥</Text> by Alfonsus Avianto
        Chandrawan
      </Box>
    </Box>
  );
};

export default Footer;
