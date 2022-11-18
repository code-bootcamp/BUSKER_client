import { DefaultOptionType } from "antd/lib/select";
import { IQuery } from "../../../../commons/types/generated/types";
export interface IMainListProps {
  handleChangeLocation: any;
  locationOptions: DefaultOptionType[] | undefined;

  handleChangeGenre:
    | ((value: any, option: DefaultOptionType | DefaultOptionType[]) => void)
    | undefined;
  options: DefaultOptionType[] | undefined;
  filteredGenre: string[];
  data?: Pick<IQuery, "fetchBoardsBySearch">;
  onClickListItem: (id: string) => () => void;
  onClickToMap: () => void;
  onClickMoveToArtRegister: () => void;
}

export interface Option {
  value: string;
  label: string;
  children?: Option[];
}
