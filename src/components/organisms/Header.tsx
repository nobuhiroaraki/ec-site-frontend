import { Flex, Heading, Button, Box } from "@chakra-ui/react";
import { FC, memo } from "react";
import { HeaderButton } from "../atoms/HeaderButton";
import { useOnClickButton } from "../../hooks/useOnClickButton";

export const Header: FC = memo(() => {
  const { onClickRegister, onClickLogin } = useOnClickButton();
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
        >
          ECサイト
        </Heading>
        <HeaderButton text={"新規登録"} onClick={onClickRegister} />
        <HeaderButton text={"ログイン"} onClick={onClickLogin} />
      </Flex>
    </>
  );
});
