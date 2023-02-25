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
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDir="column" minH="100vh">
        <Header />
        <Box flex={1} pt={6} pb={10} maxW="container.xl" mx="auto" w="full">
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
