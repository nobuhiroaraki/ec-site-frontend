import { Product } from "../types/product";
import { useState, useCallback } from "react";

export const useGetProducts = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  const getProducts = useCallback(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json["products"]));
  }, []);
  return { getProducts, products };
};
