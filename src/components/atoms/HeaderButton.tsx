import { Button } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  text: string;
  onClick(): void;
};

export const HeaderButton: FC<Props> = memo((props) => {
  const { text, onClick } = props;
  return (
    <>
      <Button
        bg="green.600"
        color="gray.50"
        _hover={{ bg: "green.500" }}
        onClick={onClick}
        marginRight="3"
      >
        {text}
      </Button>
    </>
  );
});
