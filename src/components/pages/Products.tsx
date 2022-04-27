import { FC, memo } from "react";
import { ProductCard } from "../molecules/ProductCard";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

export const Products: FC = memo(() => {
  return (
    <>
      <Header />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />

      <Footer />
    </>
  );
});
