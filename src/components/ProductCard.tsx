import {
  Box,
  Flex,
  GridItem,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

type ProductCardProps = {
  title: string;
  price: number;
  image: string;
  rating: number;
  id: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
  rating,
}) => {
  return (
    <GridItem shadow="md" cursor="pointer" as={Link} href={`/product/${id}`}>
      <Box rounded="lg">
        <Image
          src={image}
          alt={title}
          w="full"
          style={{ aspectRatio: 1 }}
          objectFit="contain"
          objectPosition="center"
        />
        <Box px={3} pt={2} pb={4}>
          <Text noOfLines={2} color="black">
            {title}
          </Text>
          <Text noOfLines={2} color="black" fontSize="lg" fontWeight="semibold">
            ${price}
          </Text>
          <Flex alignItems="center" gap={1}>
            <Icon as={FaStar} color="yellow.400" />
            <Text> {rating}</Text>
          </Flex>
        </Box>
      </Box>
    </GridItem>
  );
};

export default ProductCard;
