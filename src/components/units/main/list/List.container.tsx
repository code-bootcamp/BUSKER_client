import { data } from "./dummy";
import { useState } from "react";
import MainListUI from "./List.presenter";
import type { SelectProps } from "antd";
import { useRouter } from "next/router";

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const MainList = () => {
  const router = useRouter();
  const [filteredGenre, setFilteredGenre] = useState<string[]>([]);
  const [filteredLocation, setFilteredLocation] = useState("");

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

  const locationOptions: Option[] = [
    {
      value: "수도권",
      label: "수도권",
      children: [
        {
          value: "서울",
          label: "서울",
          children: [
            {
              value: "구로구",
              label: "구로구",
            },
          ],
        },
        {
          value: "경기",
          label: "경기",
          children: [
            {
              value: "성남시",
              label: "성남시",
            },
          ],
        },
        {
          value: "인천",
          label: "인천",
          children: [
            {
              value: "미추홀구",
              label: "미추홀구",
            },
          ],
        },
      ],
    },
    {
      value: "수도권 외",
      label: "수도권 외",
    },
  ];

  const handleChangeGenre = (value: string[]) => {
    setFilteredGenre(value);
  };

  const handleChangeLocation = (value: string[]) => {
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
  console.log(filteredLocation);
  return (
    <MainListUI
      onClickToMap={onClickToMap}
      onClickListItem={onClickListItem}
      handleChangeGenre={handleChangeGenre}
      handleChangeLocation={handleChangeLocation}
      filteredGenre={filteredGenre}
      filteredLocation={filteredLocation}
      locationOptions={locationOptions}
      options={options}
      data={data}
    />
  );
};

export default MainList;
