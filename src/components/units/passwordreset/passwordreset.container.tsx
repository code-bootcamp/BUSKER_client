import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import PasswordResetPageWriteUI from "./passwordreset.presenter";
import { PasswordResetYup } from "./passwordreset.scehma";
import { IFormData } from "./passwordreset.types";

const PasswordResetPageWrite = () => {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(PasswordResetYup),
    mode: "onChange",
  });
  const onClickMoveBack = () => {
    router.back();
  };

  const onClickReset = () => {
    void router.push("/password/change");
  };
  const onClickConfirm = () => {};
  const onClickMessageConfirm = () => {};

  return (
    <PasswordResetPageWriteUI
      onClickMoveBack={onClickMoveBack}
      register={register}
      handleSubmit={handleSubmit}
      onClickReset={onClickReset}
      onClickConfirm={onClickConfirm}
      onClickMessageConfirm={onClickMessageConfirm}
      formState={formState}
    />
  );
};

export default PasswordResetPageWrite;
