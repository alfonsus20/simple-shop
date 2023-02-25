import { Box, GridItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const ProductCardSkeleton = () => {
  return (
    <GridItem shadow="md" cursor="pointer">
      <Box p={4} rounded="lg">
        <Skeleton mb={4} style={{ aspectRatio: 1 }} />
        <SkeletonText mt="4" noOfLines={2} spacing="2" skeletonHeight="3" />
        <SkeletonText
          mt="4"
          noOfLines={1}
          spacing="2"
          skeletonHeight="3"
          w="40%"
        />
        <SkeletonText
          mt="4"
          noOfLines={1}
          spacing="2"
          skeletonHeight="3"
          w="25%"
        />
      </Box>
    </GridItem>
  );
};

export default ProductCardSkeleton;
