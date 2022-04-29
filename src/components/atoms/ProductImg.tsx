import { Image } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  marginPx: string;
};

export const ProductImg: FC<Props> = memo((props) => {
  const { marginPx } = props;
  const imgSrc: string = "https://source.unsplash.com/random";
  return (
    <>
      <Image
        alt="productsImg"
        src={imgSrc}
        boxSize="200"
        borderRadius="2xl"
        shadow="md"
        margin={marginPx}
      ></Image>
    </>
  );
});
