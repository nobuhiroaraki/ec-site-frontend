import { Image } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  marginPx: string;
  id: number;
};

export const ProductImg: FC<Props> = memo((props) => {
  const { marginPx, id } = props;
  const imgSrc: string = `https://source.unsplash.com/random/${id}`;
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
