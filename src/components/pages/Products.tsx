import { FC, memo, useEffect } from "react";
import { ProductCard } from "../organisms/ProductCard";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import { useGetProducts } from "../../hooks/useGetProducts";
import { Text } from "@chakra-ui/react";

export const Products: FC = memo(() => {
  const { getProducts, products } = useGetProducts();
  useEffect(() => getProducts(), [getProducts]);
  if (products.length === 0) {
    return (
      <>
        <Header />
        <Text>だめだこりゃ</Text>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Text>なんかうまくいった</Text>
        <Footer />
      </>
    );
  }
});
