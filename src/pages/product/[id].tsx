import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import Layout from "@components/Layout";
import { getProductDetail } from "@services/product.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { FaStar, FaCartPlus } from "react-icons/fa";
import useManageCart from "src/hooks/useManageCart";

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.id as string;

  const { data, isLoading } = useQuery({
    queryFn: () => getProductDetail(productId),
    queryKey: ["product", productId],
  });

  const product = data?.data;

  const { addToCart } = useManageCart();

  return (
    <Layout title="Product Detail">
      <Flex>
        <Box w="40%">
          <Image
            src={product?.image}
            alt={product?.title}
            w="full"
            style={{ aspectRatio: 4 / 3 }}
            objectPosition="center"
            objectFit="contain"
          />
        </Box>
        <Box w="60%">
          <Text fontWeight="semibold" fontSize="3xl">
            {product?.title}
          </Text>
          <Flex alignItems="center" gap={1} mb={4}>
            <Icon as={FaStar} color="yellow.300" />
            <Text>
              {product?.rating?.rate} ({product?.rating?.count} ratings)
            </Text>
          </Flex>
          <Text fontWeight="semibold" fontSize="3xl" mb={4}>
            ${product?.price}
          </Text>
          <Text mb={6}>{product?.description}</Text>
          <Button
            size="lg"
            leftIcon={<Icon as={FaCartPlus} />}
            colorScheme="blue"
            onClick={() => addToCart(product!)}
          >
            Add To Cart
          </Button>
        </Box>
      </Flex>
    </Layout>
  );
};

export default ProductDetail;
