import { data } from "./dummy";
import { useState } from "react";
import MainListUI from "./List.presenter";
import type { SelectProps } from "antd";
import { useRouter } from "next/router";

const MainList = () => {
  const router = useRouter();

  const [filteredLocation, setFilteredLocation] = useState<string[]>([]);

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

  const handleChangeLocation = (value: string[]) => {
    setFilteredLocation(value);
  };

  const onClickListItem = (id: string) => async () => {
    await router.push(`/board/${id}`);
  };

  const onClickToMap = async () => {
    await router.push("/map");
  };

  return (
    <MainListUI
      onClickToMap={onClickToMap}
      onClickListItem={onClickListItem}
      handleChangeLocation={handleChangeLocation}
      filteredLocation={filteredLocation}
      options={options}
      data={data}
    />
  );
};

export default MainList;
