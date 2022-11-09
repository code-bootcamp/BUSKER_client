import { AnimatePresence } from "framer-motion";
import { IBoards } from "../../../../commons/types/generated/types";
import * as S from "./List.styles";
import ListItem from "./ListItem";
import { Select } from "antd";
import { DefaultOptionType } from "antd/lib/select";
import Button01 from "../../../common/buttons/01";
import { stylePrimaryColor } from "../../../../commons/styles/globalStyles";

interface IMainListProps {
  handleChangeLocation:
    | ((value: any, option: DefaultOptionType | DefaultOptionType[]) => void)
    | undefined;
  options: DefaultOptionType[] | undefined;
  filteredLocation: string[];
  data?: any[];
  onClickListItem: (id: string) => () => void;
  onClickToMap: () => void;
}

const MainListUI = (props: IMainListProps) => {
  return (
    <S.Wrapper>
      <S.OptionBox>
        <S.LocationOptionBox>
          <Select
            mode="tags"
            style={{ width: "100%" }}
            // placeholder="Tags Mode"
            onChange={props.handleChangeLocation}
            options={props.options}
          />
        </S.LocationOptionBox>
        <S.GenreOptionBox>장르별</S.GenreOptionBox>
      </S.OptionBox>
      <S.ListBox>
        <AnimatePresence>
          {props.filteredLocation.length
            ? props.data
                ?.filter((board: IBoards) =>
                  props.filteredLocation?.includes(board.category.name)
                )
                .map((board: IBoards) => (
                  <ListItem
                    key={board.id}
                    board={board}
                    onClickListItem={props.onClickListItem}
                  />
                ))
            : props.data?.map((board: IBoards) => (
                <ListItem
                  key={board.id}
                  board={board}
                  onClickListItem={props.onClickListItem}
                />
              ))}
        </AnimatePresence>
      </S.ListBox>
      <Button01
        style={{
          position: "fixed",
          bottom: "5px",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: "2",
          backgroundColor: `${stylePrimaryColor}`,
          color: "white",
        }}
        onClick={props.onClickToMap}
      >
        지도로 가기
      </Button01>
    </S.Wrapper>
  );
};

export default MainListUI;
