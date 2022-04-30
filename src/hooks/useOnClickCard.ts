import { useCallback } from "react";

type Props = {
  id: number;
};

export const useOnClickCard = (props: Props) => {
  const { id } = props;
  const onClickCard = useCallback(() => {
    alert(`${id}番の商品の詳細を表示します`);
  }, [id]);
  return { onClickCard };
};
