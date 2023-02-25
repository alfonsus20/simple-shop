import { Box, Button, Flex, Skeleton, SkeletonText } from "@chakra-ui/react";

const ProductDetailSkeleton = () => {
  return (
    <Box>
      <Flex gap={8} mb={4} flexDirection={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "40%" }}>
          <Skeleton style={{ aspectRatio: 4 / 3 }} />
        </Box>
        <Box w={{ base: "100%", md: "60%" }}>
          <Skeleton height={8} mb={4} />
          <Skeleton height={5} mb={4} w="25%" />
          <Skeleton height={9} mb={6} w="20%" />
          <Skeleton height={9} mb={6} w="35%" />
          <Button size="lg" isLoading colorScheme="blue" variant="outline">
            Add To Cart
          </Button>
        </Box>
      </Flex>
      <Box>
        <Skeleton height={8} mb={3} maxW={60} />
        <SkeletonText noOfLines={2} spacing="2" skeletonHeight="4" />
      </Box>
    </Box>
  );
};

export default ProductDetailSkeleton;
