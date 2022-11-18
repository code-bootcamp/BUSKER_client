import { useState } from "react";
import MainListUI from "./List.presenter";
import type { SelectProps } from "antd";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsBySearchArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARDS_BY_SEARCH } from "./List.queries";
import DistrcitData from "./DistrictData";

const MainList = () => {
  const router = useRouter();
  const locationOptions = DistrcitData;
  const [filteredGenre, setFilteredGenre] = useState<string[]>([]);
  const { data: boardsData, refetch } = useQuery<
    Pick<IQuery, "fetchBoardsBySearch">,
    IQueryFetchBoardsBySearchArgs
  >(FETCH_BOARDS_BY_SEARCH);

  // const { data: genres } =
  //   useQuery<Pick<IQuery, "fetchCategories">>(FETCH_CATEGORIES);

  const options: SelectProps["options"] = [
    {
      value: "춤",
      label: "춤",
    },
    {
      value: "노래",
      label: "노래",
    },
    {
      value: "악기",
      label: "악기",
    },
    {
      value: "몰라",
      label: "몰라",
    },
  ];

  const handleChangeGenre = (value: string[]) => {
    setFilteredGenre(value);
    // refetch({})
  };

  const handleChangeLocation = async (value: string[]) => {
    const district = `${value?.[0]} ${value?.[1]}`;

    if (district === "undefined undefined") {
      await refetch({ searchBoardInput: { page: 1 } });
    } else {
      await refetch({ searchBoardInput: { district, page: 1 } });
    }
  };

  const onClickListItem = (id: string) => async () => {
    await router.push(`/main/list/${id}`);
  };

  const onClickToMap = async () => {
    await router.push("/map");
  };

  const onClickMoveToArtRegister = async () => {
    await router.push("/artregister");
  };

  // console.log("boardsData:", boardsData);
  return (
    <MainListUI
      onClickToMap={onClickToMap}
      onClickListItem={onClickListItem}
      handleChangeGenre={handleChangeGenre}
      handleChangeLocation={handleChangeLocation}
      filteredGenre={filteredGenre}
      locationOptions={locationOptions}
      options={options}
      data={boardsData}
      onClickMoveToArtRegister={onClickMoveToArtRegister}
    />
  );
};

export default MainList;
