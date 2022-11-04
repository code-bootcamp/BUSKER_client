import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import PasswordChangePageWriteUI from "./passwordchange.presenter";
import { PasswordChangeYup } from "./passwordchange.schema";
import { IFormData } from "./passwordchange.types";

const PasswordChangePageWrite = () => {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(PasswordChangeYup),
    mode: "onChange",
  });

  const onClickChangePassword = () => {};

  return (
    <PasswordChangePageWriteUI
      onClickChangePassword={onClickChangePassword}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
    />
  );
};

export default PasswordChangePageWrite;
