import { MouseEvent } from "react";

export interface IArtistSignupPageWriteUI {
  isOpen: boolean;
  onClickSearchAddress: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickHandleCancel: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onClickTeam: () => void;
  isTeam: boolean;
  onClickAddTeam: () => void;
  addCount: number;
}
