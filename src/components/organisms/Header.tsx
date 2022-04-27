import { Flex } from "@chakra-ui/react";
import { FC, memo } from "react";

export const Header: FC = memo(() => {
  return (
    <>
      <Flex
        as="header"
        bg="lavender"
        color="black"
        padding={{ base: 4, md: 6 }}
      >
        ヘッダーだよ
      </Flex>
    </>
  );
});
