import { Grid } from "@chakra-ui/react";
import Layout from "@components/Layout";
import ProductCard from "@components/ProductCard";
import ProductCardSkeleton from "@components/ProductCardSkeleton";
import { getProductList } from "@services/product.service";
import { useQuery } from "@tanstack/react-query";

const Skeletons = Array.from(Array(15), (_, i) => (
  <ProductCardSkeleton key={i} />
));

const Home = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => getProductList(),
    queryKey: ["product"],
  });

  return (
    <Layout title="Simple Shop - Products">
      <Grid
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(4,1fr)",
          lg: "repeat(5,1fr)",
        }}
        gap={6}
      >
        {isLoading
          ? Skeletons
          : data?.data.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating?.rate}
              />
            ))}
      </Grid>
    </Layout>
  );
};

export default Home;
