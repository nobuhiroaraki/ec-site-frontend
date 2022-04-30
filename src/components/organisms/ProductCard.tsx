import { Box } from "@chakra-ui/react";
import { FC, memo } from "react";

import { ProductImg } from "../atoms/ProductImg";
import { ProductContent } from "../molecules/ProductContent";
import { useOnClickCard } from "../../hooks/useOnClickCard";

type Props = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
};

export const ProductCard: FC<Props> = memo((props) => {
  const { id, title, price, discountPercentage, rating } = props;
  const { onClickCard } = useOnClickCard(props);
  return (
    <>
      <Box
        h="280px"
        w="450px"
        margin="10px"
        padding="3"
        bg="white"
        borderRadius="10px"
        shadow="md"
        _hover={{ cursor: "pointer", opacity: 0.8 }}
        onClick={onClickCard}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <ProductImg marginPx={"1"} firstImage={thumbnail} />
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
