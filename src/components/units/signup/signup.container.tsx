import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import SignupPageWriteUI from "./signup.presenter";
import { SignupYup } from "./signup.schema";
import { IFormData } from "./signup.type";

const SignupPageWrite = () => {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(SignupYup),
    mode: "onChange",
  });

  const onClickMoveBack = () => {
    void router.back();
  };

  const onClickSignup = () => {};

  return (
    <SignupPageWriteUI
      onClickMoveBack={onClickMoveBack}
      register={register}
      onClickSignup={onClickSignup}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
};

export default SignupPageWrite;
