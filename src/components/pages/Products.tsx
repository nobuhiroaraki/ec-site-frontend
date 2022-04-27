import { FC, memo } from "react";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

export const Products: FC = memo(() => {
  return (
    <>
      <Header />
      <p>bodyだよ</p>
      <Footer />
    </>
  );
});
