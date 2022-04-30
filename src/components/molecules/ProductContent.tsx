import { Box, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  productName: string;
  price: number;
  discountPercent: number;
  starNum: number;
};

export const ProductContent: FC<Props> = memo((props) => {
  const { productName, price, discountPercent, starNum } = props;
  return (
    <>
      <Box>
        <Stack spacing={3} alignItems="center" margin="30px 50px">
          <Text fontSize="2xl" fontWeight="bold" margin="auto">
            {productName}
          </Text>
          <Text fontSize="2xl" fontWeight="medium">
            {"$" + price}
          </Text>
          <Text fontSize="2xl" fontWeight="semibold" color="red">
            {discountPercent !== 0 ? `${discountPercent}%off` : ""}
          </Text>
          <Text fontSize="1xl" color="yellow.300">
            {"★".repeat(starNum)}
          </Text>
        </Stack>
      </Box>
    </>
  );
});
