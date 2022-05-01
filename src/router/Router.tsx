import { memo, FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ProductDetail } from "../components/pages/ProductDetail";
import { Products } from "../components/pages/Products";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="productDetail" element={<ProductDetail />} />
    </Routes>
  );
});
