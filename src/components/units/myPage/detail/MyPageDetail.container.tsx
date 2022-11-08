import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import MyPageDetailUI from "./MyPageDetail.presenter";

const MyPageDetail = () => {
  const router = useRouter();
  const [data] = useState([
    { id: "a", image: "", name: "아무개1", nextDate: "2022-12-20" },
    { id: "b", image: "", name: "아무개2", nextDate: "2022-12-21" },
    { id: "c", image: "", name: "아무개3", nextDate: "2022-12-22" },
  ]);

  const onClickPickedArtist =
    (id: string) => (event: MouseEvent<HTMLLIElement>) => {
      console.log(event.currentTarget);
      void router.push(`/`);
    };

  const onClickPickOff =
    (id: string) => (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      console.log("찜 해제");
    };
  return (
    <MyPageDetailUI
      data={data}
      onClickPickOff={onClickPickOff}
      onClickPickedArtist={onClickPickedArtist}
    />
  );
};

export default MyPageDetail;
