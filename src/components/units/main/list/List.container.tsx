import { useState } from "react";
import MainListUI from "./List.presenter";
import type { SelectProps } from "antd";
import { useRouter } from "next/router";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsBySearchArgs,
  IQueryFetchCityArgs,
} from "../../../../commons/types/generated/types";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_BY_SEARCH,
  FETCH_CATEGORIES,
  FETCH_CITY,
  FETCH_CITYS,
} from "./List.queries";
import { Option } from "./List.types";
import { FETCH_USER } from "../../artistsignup/ArtistSignup.Quries";

const MainList = () => {
  const router = useRouter();
  const [locationOptions, setLocationOptions] = useState<Option[]>([
    {
      value: "서울",
      label: "서울",
      isLeaf: false,
    },
    {
      value: "경기",
      label: "경기",
      isLeaf: false,
    },

    {
      value: "인천",
      label: "인천",
      isLeaf: false,
    },
    {
      value: "대구",
      label: "대구",
      isLeaf: false,
    },
    {
      value: "대전",
      label: "대전",
      isLeaf: false,
    },

    {
      value: "부산",
      label: "부산",
      isLeaf: false,
    },
    {
      value: "울산",
      label: "울산",
      isLeaf: false,
    },
  ]);
  const [filteredGenre, setFilteredGenre] = useState<string[]>([]);
  const [filteredLocation, setFilteredLocation] = useState("");
  const { data: boardsData, refetch } = useQuery<
    Pick<IQuery, "fetchBoardsBySearch">,
    IQueryFetchBoardsBySearchArgs
  >(FETCH_BOARDS_BY_SEARCH);
  // const { data: citys } = useQuery<Pick<IQuery, "fetchCitys">>(FETCH_CITYS);
  console.log(boardsData);
  const [loadDistricts, { data: districts, loading }] = useLazyQuery<
    Pick<IQuery, "fetchCity">,
    IQueryFetchCityArgs
  >(FETCH_CITY);

  const loadData = async (selectedOptions: Option[]) => {
    console.log("선택된 옵션:", selectedOptions);
    const targetOption = selectedOptions[selectedOptions.length - 1];
    console.log("타겟 옵션", targetOption);
    try {
      await loadDistricts({
        variables: { name: targetOption.label },
      });

      //   setLocationOptions((prev) => {
      //     const children = districts?.fetchCity.district;
      //     prev[targetOption.value]
      //   });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const { data: genres } =
    useQuery<Pick<IQuery, "fetchCategories">>(FETCH_CATEGORIES);

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

  const handleChangeLocation = (value: string[]) => {
    console.log("onChange:", value);
    let arrToString = `${value?.[1]} ${value?.[2]}`;
    if (arrToString === "undefined undefined") {
      arrToString = "";
    }
    setFilteredLocation(arrToString);
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
      // loadDistricts={loadDistricts}
      loadData={loadData}
      onClickToMap={onClickToMap}
      onClickListItem={onClickListItem}
      handleChangeGenre={handleChangeGenre}
      handleChangeLocation={handleChangeLocation}
      filteredGenre={filteredGenre}
      filteredLocation={filteredLocation}
      locationOptions={locationOptions}
      options={options}
      data={boardsData}
      onClickMoveToArtRegister={onClickMoveToArtRegister}
    />
  );
};

export default MainList;
