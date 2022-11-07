import { UseFormRegister } from "react-hook-form";

export interface IArtRegisterPageWriteUI {
  onClickHandleCancel: () => void;
  onClickAddressOpen: () => void;
  onCompleteAddressSearch: (data: any) => void;
  isOpen: boolean;
  address: string;
  register: UseFormRegister<IFormData>;
  formState: any;
  handleSubmit: any;
  handleChange: any;
  options: any;
  onClickRegister: () => void;
}

export interface IFormData {
  contents: string;
  genre: string;
  image: string;
  place: string;
}
