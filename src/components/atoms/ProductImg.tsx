import { Image } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  marginPx: string;
  firstImage: string;
};

export const ProductImg: FC<Props> = memo((props) => {
  const { marginPx, firstImage } = props;
  const imgSrc: string = `${firstImage}`;
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
