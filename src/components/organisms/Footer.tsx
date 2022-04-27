import { Flex } from "@chakra-ui/react";
import { FC, memo } from "react";

export const Footer: FC = memo(() => {
  return (
    <>
      <Flex
        as="header"
        bg="lavender"
        color="black"
        padding={{ base: 4, md: 6 }}
        position="fixed"
        left={0}
        bottom={0}
        width="100%"
      >
        フッターだよ
      </Flex>
    </>
  );
});
