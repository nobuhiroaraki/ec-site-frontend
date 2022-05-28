import { Flex, Heading } from "@chakra-ui/react";
import { FC, memo } from "react";
import { HeaderButton } from "../atoms/HeaderButton";
import { useOnClickButton } from "../../hooks/useOnClickButton";
import { useOnClickTitle } from "../../hooks/useOnClickTitle";

export const Header: FC = memo(() => {
  const { onClickRegister, onClickLogin } = useOnClickButton();
  const { onClickTitle } = useOnClickTitle();
  return (
    <>
      <Flex
        as="nav"
        bg="mediumaquamarine"
        color="gray.50"
        padding={{ base: 3, md: 5 }}
        height="100px"
        align="center"
      >
        <Heading
          fontSize="3xl"
          _hover={{ cursor: "pointer" }}
          margin="auto"
          marginLeft="auto"
          onClick={onClickTitle}
        >
          ECサイト
        </Heading>
        <HeaderButton text={"新規登録"} onClick={onClickRegister} />
        <HeaderButton text={"ログイン"} onClick={onClickLogin} />
      </Flex>
    </>
  );
});
