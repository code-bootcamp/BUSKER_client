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
    mode: "onChange",
  });

  const onClickSignUp = () => {
    void router.push("/signup");
  };

  const onClickRestorePassword = () => {
    void router.push("/password/reset");
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
