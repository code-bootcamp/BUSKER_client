import { DefaultOptionType } from "antd/lib/select";
export interface IMainListProps {
  handleChangeLocation: any;
  locationOptions: DefaultOptionType[] | undefined;

  handleChangeGenre:
    | ((value: any, option: DefaultOptionType | DefaultOptionType[]) => void)
    | undefined;
  options: DefaultOptionType[] | undefined;
  filteredGenre: string[];
  data?: any[];
  onClickListItem: (id: string) => () => void;
  onClickToMap: () => void;
  filteredLocation: string;
}
