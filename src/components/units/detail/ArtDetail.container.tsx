import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getDate from "../../../commons/libraries/getDate";
import useAuth from "../../../commons/libraries/useAuth";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../commons/types/generated/types";
import { FETCH_ARTIST } from "../artistDetail/ArtistDetail.queries";

import ArtDetailUI from "./ArtDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./ArtDetail.queries";

const ArtDetail = () => {
  useAuth();
  const router = useRouter();
  const [date, setDate] = useState(["", ""]);
  const [isArtist, setIsArtist] = useState(false);
  const { data: artistData } =
    useQuery<Pick<IQuery, "fetchArtist">>(FETCH_ARTIST);
  const { data: artData } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, {
    variables: { boardId: String(router.query.id) },
  });

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  useEffect(() => {
    if (typeof window !== "undefined")
      setDate([
        getDate(artData?.fetchBoard.start_time),
        getDate(artData?.fetchBoard.end_time),
      ]);

    if (artistData) setIsArtist(true);
  }, [artData, artistData]);

  const onClickMoveToEdit = async () => {
    await router.push(`./${String(router.query.id)}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoard({ variables: { boardId: String(router.query.id) } });
      alert("버스킹 정보가 삭제되었습니다.");
      await router.push("/main/list");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <ArtDetailUI
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDelete={onClickDelete}
      isArtist={isArtist}
      data={artData}
      date={date}
      routerId={router.query.id}
    />
  );
};

export default ArtDetail;
