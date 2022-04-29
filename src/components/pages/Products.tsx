import { FC, memo, useEffect } from "react";
import { ProductCard } from "../organisms/ProductCard";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import { useGetProducts } from "../../hooks/useGetProducts";
import { Text, Wrap, WrapItem } from "@chakra-ui/react";

export const Products: FC = memo(() => {
  const { getProducts, products } = useGetProducts();
  useEffect(() => getProducts(), [getProducts]);
  return (
    <>
      <Header />
      <Wrap p={{ base: 4, md: 10 }}>
        {products.map((product) => (
          <WrapItem key={product.id} mx="auto">
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              discountPercentage={product.discountPercentage}
              rating={product.rating}
            />
          </WrapItem>
        ))}
      </Wrap>
      <Footer />
    </>
  );
});
