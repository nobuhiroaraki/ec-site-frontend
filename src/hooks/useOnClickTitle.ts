import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useOnClickTitle = () => {
  const navigate = useNavigate();
  const onClickTitle = useCallback(() => navigate("/"), [navigate]);
  return { onClickTitle };
};
