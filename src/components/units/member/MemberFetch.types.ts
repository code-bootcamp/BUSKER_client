import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IMemberFetchWrite {
  setIsMemberEdit: any;
  el: any;
  setGetId: any;
}

export interface IMemberFetchWriteUI {
  el: any;
  isOpen: boolean;
  onClickDelete: () => void;
  onClickId: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickGetId: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCancel: () => void;
}
