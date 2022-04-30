import { useCallback } from "react";

export const useOnclickButton = () => {
  const onClickRegister = useCallback(() => {
    alert("登録します");
  }, []);

  const onClickLogin = useCallback(() => {
    alert("ログインします");
  }, []);

  return { onClickRegister, onClickLogin };
};
