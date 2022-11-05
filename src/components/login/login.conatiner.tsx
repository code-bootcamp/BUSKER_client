import { useForm } from "react-hook-form";
import LoginPageWriteUI from "./login.presenter";
import { LoginYup } from "./login.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormData } from "./login.types";
import { useRouter } from "next/router";

const LoginPageWrite = () => {
  const router = useRouter();
  const { register, formState, handleSubmit } = useForm<IFormData>({
    resolver: yupResolver(LoginYup),
<<<<<<< HEAD
  });

  const onClickSignUp = () => {
    void router.push("/");
=======
    mode: "onChange",
  });

  const onClickSignUp = () => {
    void router.push("/signup");
>>>>>>> 08ec9426f3de0fd23503458a8d4e87330ba56dc7
  };

  const onClickRestorePassword = () => {
    void router.push("/");
  };

  const onClickLogin = () => {
    void router.push("/");
  };

  return (
    <LoginPageWriteUI
      register={register}
      formState={formState}
      onClickSignUp={onClickSignUp}
      onClickRestorePassword={onClickRestorePassword}
      onClickLogin={onClickLogin}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginPageWrite;
