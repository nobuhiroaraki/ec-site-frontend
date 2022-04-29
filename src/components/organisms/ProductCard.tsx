import { Box } from "@chakra-ui/react";
import { FC, memo } from "react";

import { ProductImg } from "../atoms/ProductImg";
import { ProductContent } from "../molecules/ProductContent";

export const ProductCard: FC = memo(() => {
  return (
    <>
      <Box
        h="250px"
        w="500px"
        margin="30px"
        padding="20px"
        bg="white"
        borderRadius="10px"
        shadow="md"
        _hover={{ cursor: "pointer", opacity: 0.8 }}
      >
        <Box display="flex">
          <ProductImg marginPx={"1"} />
          <ProductContent productName="hoge" price={3000} starNum={3} />
        </Box>
      </Box>
    </>
  );
});
