import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationConfirmVerificationEmailArgs,
} from "../../../commons/types/generated/types";
import PasswordResetPageWriteUI from "./passwordreset.presenter";
import {
  CONFIRM_VERIFICATION_EMAIL,
  SEND_VERIFICATION_EMAIL,
} from "./PasswordReset.quries";
import { PasswordResetYup } from "./passwordreset.scehma";
import { IFormData } from "./passwordreset.types";

const PasswordResetPageWrite = () => {
  const router = useRouter();

  const [confirmVerificationEmail] = useMutation<
    Pick<IMutation, "confirmVerificationEmail">,
    IMutationConfirmVerificationEmailArgs
  >(CONFIRM_VERIFICATION_EMAIL);

  const [SendVerificationEmail] = useMutation(SEND_VERIFICATION_EMAIL);

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(PasswordResetYup),
    mode: "onChange",
  });
  const onClickMoveBack = () => {
    router.back();
  };

  const onClickReset = async (data: IFormData) => {
    await confirmVerificationEmail({
      variables: {
        email: data.email,
        authNumber: data.confirm,
      },
    });
    void router.push("/login");
  };
  const onClickConfirm = async () => {
    await SendVerificationEmail();
  };

  return (
    <PasswordResetPageWriteUI
      onClickMoveBack={onClickMoveBack}
      register={register}
      handleSubmit={handleSubmit}
      onClickReset={onClickReset}
      onClickConfirm={onClickConfirm}
      formState={formState}
    />
  );
};

export default PasswordResetPageWrite;
