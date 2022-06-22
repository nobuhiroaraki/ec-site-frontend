import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, memo, useState, ChangeEvent } from "react";
import { HeaderButton } from "../atoms/HeaderButton";
import { useOnClickTitle } from "../../hooks/useOnClickTitle";

export const Header: FC = memo(() => {
  const { onClickTitle } = useOnClickTitle();
  const {
    isOpen: isOpenRegister,
    onOpen: onOpenRegister,
    onClose: onCloseRegister,
  } = useDisclosure();
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

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
        <HeaderButton text={"新規登録"} onClick={onOpenRegister} />
        <HeaderButton text={"ログイン"} onClick={onOpenLogin} />
      </Flex>

      <Modal isOpen={isOpenRegister} onClose={onCloseRegister}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>新規登録</ModalHeader>
            <ModalCloseButton></ModalCloseButton>
            <ModalBody mx={4}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>ユーザー名</FormLabel>
                  <Input value={username} onChange={onChangeUserName} />
                  <FormLabel>パスワード</FormLabel>
                  <Input value={password} onChange={onChangePassword} />
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button>登録</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>

      <Modal isOpen={isOpenLogin} onClose={onCloseLogin}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>ログイン</ModalHeader>
            <ModalCloseButton></ModalCloseButton>
            <ModalBody mx={4}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>ユーザー名</FormLabel>
                  <Input value={username} onChange={onChangeUserName} />
                  <FormLabel>パスワード</FormLabel>
                  <Input value={password} onChange={onChangePassword} />
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button>ログイン</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
});
