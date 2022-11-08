import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import SignupPageWriteUI from "./signup.presenter";
import { CREATE_USER } from "./Signup.quries";
import { SignupYup } from "./signup.schema";
import { IFormData } from "./signup.type";

const SignupPageWrite = () => {
  const router = useRouter();

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(SignupYup),
    mode: "onChange",
  });

  const onClickMoveBack = () => {
    void router.back();
  };

  const onClickSignup = async (data: IFormData) => {
    await createUser({
      variables: {
        createUserInput: data,
      },
    });
    void router.push("/login");
  };

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
