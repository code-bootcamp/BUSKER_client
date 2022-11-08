import { UseFormRegister } from "react-hook-form";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";

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
  genre: string;
  artTime: any;
  onClickRegister: () => void;
  TimeChange: (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => void;
}

export interface IFormData {
  contents: string;
  genre: string;
  image: string;
  place: string;
  time: string[];
}
