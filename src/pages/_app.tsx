import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import CartProvider from "src/context/CartContext";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <main className={roboto.className}>
            <Component {...pageProps} />
          </main>
        </QueryClientProvider>
      </CartProvider>
    </ChakraProvider>
  );
}
