import { useForm } from "react-hook-form";
import LoginPageWriteUI from "./login.presenter";
import { LoginYup } from "./login.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormData } from "./login.types";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { LOGIN } from "./Login.Quries";
import {
  IMutation,
  IMutationLoginArgs,
} from "../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

const LoginPageWrite = () => {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [login] = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(
    LOGIN
  );

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

  const onClickLogin = async (data: IFormData) => {
    try {
      const result = await login({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.login;
      setAccessToken(String(accessToken));
      await router.push("/main/list");
    } catch (error) {
      if (error instanceof Error) {
        alert(error);
      }
    }
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
