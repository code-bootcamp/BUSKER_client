import { MouseEvent } from "react";

export interface IMyPageProps {
  data?: Array<{
    image: string;
    name: string;
    nextDate: string;
    id: string;
  }>;
  onClickPickedArtist: (
    id: string
  ) => (event: MouseEvent<HTMLLIElement>) => void;
  onClickPickOff: (
    id: string
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
}
