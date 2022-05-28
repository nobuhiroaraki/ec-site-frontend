import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../types/product";

export const useOnClickCard = (props: Product) => {
  const navigate = useNavigate();
  const onClickCard = useCallback(() => {
    navigate("/ProductDetail", {
      state: {
        id: props.id,
        title: props.title,
        price: props.price,
        discountPercintage: props.discountPercentage,
        rating: props.rating,
        discription: props.description,
        images: props.images,
        thumnail: props.thumbnail,
        stock: props.stock,
        brand: props.brand,
        category: props.category,
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { onClickCard };
};
