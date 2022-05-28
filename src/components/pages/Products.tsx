import { FC, memo, useEffect } from "react";
import { ProductCard } from "../organisms/ProductCard";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import { useGetProducts } from "../../hooks/useGetProducts";
import { Wrap, WrapItem } from "@chakra-ui/react";

export const Products: FC = memo(() => {
  const { getProducts, products } = useGetProducts();
  useEffect(() => getProducts(), [getProducts]);
  return (
    <>
      <Header />
      <Wrap justify="space-around" margin="3">
        {products.map((product) => (
          <WrapItem key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              discountPercentage={product.discountPercentage}
              rating={product.rating}
              description={product.description}
              images={product.images}
              thumbnail={product.thumbnail}
              stock={product.stock}
              brand={product.brand}
              category={product.category}
            />
          </WrapItem>
        ))}
      </Wrap>
      <Footer />
    </>
  );
});
