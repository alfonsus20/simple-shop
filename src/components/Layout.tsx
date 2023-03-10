import Header from "@components/Header";
import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "@components/Footer";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Simple e-commerce website using Next.js, Chakra UI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Flex flexDir="column" minH="100vh">
        <Header />
        <Box
          px={4}
          flex={1}
          pt={6}
          pb={12}
          maxW="container.xl"
          mx="auto"
          w="full"
        >
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
