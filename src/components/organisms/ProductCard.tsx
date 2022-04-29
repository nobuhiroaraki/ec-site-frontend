import { Box } from "@chakra-ui/react";
import { FC, memo } from "react";

import { ProductImg } from "../atoms/ProductImg";
import { ProductContent } from "../molecules/ProductContent";

type Props = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
};

export const ProductCard: FC<Props> = memo((props) => {
  const { id, title, price, discountPercentage, rating } = props;
  return (
    <>
      <Box
        h="300px"
        w="450px"
        margin="30px"
        padding="20px"
        bg="white"
        borderRadius="10px"
        shadow="md"
        _hover={{ cursor: "pointer", opacity: 0.8 }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <ProductImg marginPx={"1"} id={id} />
          <ProductContent
            productName={title}
            price={price}
            discountPercent={discountPercentage}
            starNum={Math.round(rating)}
          />
        </Box>
      </Box>
    </>
  );
});
