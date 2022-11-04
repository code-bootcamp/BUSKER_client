import { UseFormRegister } from "react-hook-form";

export interface IPasswordResetPageWriteUI {
  onClickMoveBack: () => void;
  handleSubmit: any;
  register: UseFormRegister<IFormData>;
  onClickReset: () => void;
  onClickConfirm: () => void;
  onClickMessageConfirm: () => void;
  formState: any;
}

export interface IFormData {
  email: string;
  confirm: string;
}
