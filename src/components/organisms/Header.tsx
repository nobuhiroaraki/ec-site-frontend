import { Flex, Heading, Button, Box } from "@chakra-ui/react";
import { FC, memo } from "react";

export const Header: FC = memo(() => {
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
        <Heading fontSize="3xl" _hover={{ cursor: "pointer" }} margin="auto">
          ECサイト
        </Heading>
        <Button
          bg="green.600"
          color="gray.50"
          _hover={{ bg: "green.500" }}
          onClick={onClick}
        >
          ログイン
        </Button>
      </Flex>
    </>
  );
});

const onClick = () => alert("ログインしまーす");
