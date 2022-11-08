import { MouseEvent } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IArtistSignupPageWriteUI {
  handleChange: any;
  genre: any;
  options: any;
  address: string;
  isOpen: boolean;
  onClickSignup: () => void;
  onClickSearchAddress: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickHandleCancel: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onClickTeam: () => void;
  onClickEdit: () => void;
  isTeam: boolean;
  onClickAddTeam: () => void;
  addCount: number;
  isEdit: boolean;
  handleSubmit: any;
  formState: any;
  register: UseFormRegister<IFormData>;
}

export interface IArtistSignupPageWrite {
  isEdit: boolean;
}

export interface IFormData {
  images: string;
  name: string;
  address: string;
  genre: string;
  remarks: string;
  Link?: string;
  memberImg?: string;
  memberName?: string;
  memberRole?: string;
}
