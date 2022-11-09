import { UseFormRegister, UseFormSetValue } from "react-hook-form";
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
  startTime: string;
  onClickRegister: (data: IFormData) => void;
  TimeChange: (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => void;
  // onChangeFile: any;
  // imgUrl: string[];
  endTime: string;
  setValue: UseFormSetValue<IFormData>;
}

export interface IFormData {
  contents: string;
  genre: string;
  start_time: string;
  end_time: string;
  boardAddressInput: BoardAddressInput;
}

export interface BoardAddressInput {
  address: string;
  lat: string;
  lng: string;
}
