import { Grid, GridItem } from "@chakra-ui/react";
import Layout from "@components/Layout";
import ProductCard from "@components/ProductCard";
import { getProductList } from "@services/product.service";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => getProductList(),
    queryKey: ["product"],
  });

  return (
    <Layout title="Simple Shop - Products">
      <Grid templateColumns="repeat(5,1fr)" gap={6}>
        {data?.data.map((product) => (
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
