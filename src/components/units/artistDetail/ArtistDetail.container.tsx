import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import useAuth from "../../../commons/libraries/useAuth";
import {
  IMutation,
  IMutationArtistLikeToggleArgs,
  IQuery,
  IQueryFetchArtistCountArgs,
  IQueryFetchArtistWithoutAuthArgs,
  IQueryFetchMembersArgs,
} from "../../../commons/types/generated/types";
import ArtistDetailUI from "./ArtistDetail.presenter";
import {
  ARTIST_LIKE_TOGGLE,
  FETCH_ARTIST,
  FETCH_ARTIST_COUNT,
  FETCH_ARTIST_WITHOUT_AUTH,
  FETCH_MEMBERS,
  FETCH_RECENT_BOARDS,
} from "./ArtistDetail.queries";

interface IArtistProps {
  artistId?: string;
}

const ArtistDetail = ({ artistId }: IArtistProps) => {
  useAuth();
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchArtistWithoutAuth">,
    IQueryFetchArtistWithoutAuthArgs
  >(FETCH_ARTIST_WITHOUT_AUTH, { variables: { artistId: artistId ?? "" } });

  const { data: artistData } =
    useQuery<Pick<IQuery, "fetchArtist">>(FETCH_ARTIST);

  const { data: likeCount } = useQuery<
    Pick<IQuery, "fetchArtistCount">,
    IQueryFetchArtistCountArgs
  >(FETCH_ARTIST_COUNT);

  const [artistLikeToggle] = useMutation<
    Pick<IMutation, "artistLikeToggle">,
    IMutationArtistLikeToggleArgs
  >(ARTIST_LIKE_TOGGLE);

  const { data: fetchRecentBoards } = useQuery<
    Pick<IQuery, "fetchRecentBoards">
  >(FETCH_RECENT_BOARDS, { variables: { artistId } });

  const { data: memberData } = useQuery<
    Pick<IQuery, "fetchMembers">,
    IQueryFetchMembersArgs
  >(FETCH_MEMBERS);

  const onClickLikeArtist = async () => {
    try {
      await artistLikeToggle({
        variables: {
          artistId: artistId ?? "",
          status: false,
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });

      Modal.success({ content: "이 버스커를 찜했습니다." });
    } catch (error) {
      if (error instanceof Error) alert(error);
    }
  };

  const onClickMoveToEdit = () => {
    void router.push(`/artistdetail/${router.query.id}/edit`);
  };

  const onClickGoBack = () => {
    void router.back();
  };

  const onClickMoveToRecent = (id: string) => () => {
    void router.push(`/main/list/${id}`);
  };

  return (
    <ArtistDetailUI
      onClickMoveToRecent={onClickMoveToRecent}
      likeCount={likeCount}
      artistData={artistData}
      data={data}
      fetchRecentBoards={fetchRecentBoards}
      onClickGoBack={onClickGoBack}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickLikeArtist={onClickLikeArtist}
      memberData={memberData}
    />
  );
};

export default ArtistDetail;
