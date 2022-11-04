import { UseFormRegister } from "react-hook-form";

export interface ISignupPageWriteUI {
  onClickMoveBack: () => void;
  register: UseFormRegister<IFormData>;
  onClickSignup: () => void;
  handleSubmit: any;
  formState: any;
}

export interface IFormData {
  email: string;
  password: string;
  passwordConfirm: string;
}
