import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import Layout from "@components/Layout";
import ProductDetailSkeleton from "@components/ProductDetailSkeleton";
import { getProductDetail } from "@services/product.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaStar, FaCartPlus, FaPlus, FaMinus } from "react-icons/fa";
import { useCartContext } from "src/context/CartContext";

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.id as string;

  const { data, isLoading } = useQuery({
    queryFn: () => getProductDetail(productId),
    queryKey: ["product", productId],
  });

  const product = data?.data;

  const { addToCart } = useCartContext();

  const [quantity, setQuantity] = useState(1);

  return (
    <Layout title="Product Detail">
      {isLoading ? (
        <ProductDetailSkeleton />
      ) : (
        <>
          {" "}
          <Flex gap={8} mb={4} flexDirection={{ base: "column", md: "row" }}>
            <Box w={{ base: "100%", md: "40%" }}>
              <Image
                src={product?.image}
                alt={product?.title}
                w="full"
                style={{ aspectRatio: 4 / 3 }}
                objectPosition="top"
                objectFit="contain"
              />
            </Box>
            <Box w={{ base: "100%", md: "60%" }}>
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
              <Flex mb={6} alignItems="center" gap={6}>
                <Text>Quantity</Text>
                <Flex gap={2}>
                  <IconButton
                    icon={<FaMinus />}
                    variant="outline"
                    aria-label="decrease"
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity((prev) => prev - 1);
                      }
                    }}
                  />
                  <Input maxW={16} textAlign="center" value={quantity} />
                  <IconButton
                    icon={<FaPlus />}
                    variant="outline"
                    aria-label="increase"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  />
                </Flex>
              </Flex>
              <Button
                size={{ base: "md", md: "lg" }}
                leftIcon={<Icon as={FaCartPlus} />}
                colorScheme="blue"
                onClick={() => addToCart(product!, quantity)}
                variant="outline"
              >
                Add To Cart
              </Button>
            </Box>
          </Flex>
          <Box>
            <Text fontWeight="medium" fontSize="2xl" mb={2}>
              Product Description
            </Text>
            <Text>{product?.description}</Text>
          </Box>
        </>
      )}
    </Layout>
  );
};

export default ProductDetail;
