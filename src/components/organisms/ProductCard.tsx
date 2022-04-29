import { Box, Stack, Flex } from "@chakra-ui/react";
import { FC, memo } from "react";

import { ProductImg } from "../atoms/ProductImg";

export const ProductCard: FC = memo(() => {
  return (
    <>
      <Box
        h="200px"
        margin="30px"
        padding="20px"
        bg="white"
        borderRadius="10px"
        shadow="md"
        _hover={{ cursor: "pointer", opacity: 0.8 }}
      >
        <ProductImg marginPx={"3"} />
        商品名
      </Box>
    </>
  );
});
