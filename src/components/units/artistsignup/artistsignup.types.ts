import { ChangeEvent, MouseEvent } from "react";
import { UseFormRegister } from "react-hook-form";
import { IQuery } from "../../../commons/types/generated/types";

export interface IArtistSignupPageWriteUI {
  handleChange: any;
  options: any;
  address: string;
  isOpen: boolean;
  onClickSignup: (data: IFormData) => void;
  onClickSearchAddress: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickHandleCancel: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onClickTeam: () => void;
  onClickEdit: (data: IFormData) => void;
  isTeam: boolean;
  onClickAddTeam: () => void;
  addCount: number;
  isEdit: boolean;
  handleSubmit: any;
  formState: any;
  imgUrl: string;
  onCreateArtistImage: (event: ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<IFormData>;
  data: Pick<IQuery, "fetchArtist"> | undefined;
  onChangeMemberName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRole: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IArtistSignupPageWrite {
  isEdit: boolean;
}

export interface IFormData {
  active_name: string;
  category: string;
  description: string;
  promotion_url: string;
  artistImageURL: string;
}
