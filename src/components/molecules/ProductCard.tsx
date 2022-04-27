import { Box, Stack, Image, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

export const ProductCard: FC = memo(() => {
  return (
    <>
      <Box
        h="150px"
        margin="20px"
        bg="white"
        borderRadius="10px"
        shadow="md"
        _hover={{ cursor: "pointer", opacity: 0.8 }}
      >
        <Text fontSize="lg" fontWeight="bold">
          fuga
        </Text>
      </Box>
    </>
  );
});
