import { UseFormRegister } from "react-hook-form";

export interface IFormData {
  password: string;
  passwordConfirm: string;
}

export interface IPasswordChangePageWriteUI {
  onClickChangePassword: () => void;
  handleSubmit: any;
  register: UseFormRegister<IFormData>;
  formState: any;
}
