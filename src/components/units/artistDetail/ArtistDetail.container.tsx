import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationArtistLikeToggleArgs,
  IQuery,
  IQueryFetchArtistWithoutAuthArgs,
} from "../../../commons/types/generated/types";
import ArtistDetailUI from "./ArtistDetail.presenter";
import {
  ARTIST_LIKE_TOGGLE,
  FETCH_ARTIST_WITHOUT_AUTH,
} from "./ArtistDetail.queries";

interface IArtistProps {
  artistId?: string;
}

const ArtistDetail = ({ artistId }: IArtistProps) => {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchArtistWithoutAuth">,
    IQueryFetchArtistWithoutAuthArgs
  >(FETCH_ARTIST_WITHOUT_AUTH, { variables: { artistId: artistId ?? "" } });

  const [artistLikeToggle] = useMutation<
    Pick<IMutation, "artistLikeToggle">,
    IMutationArtistLikeToggleArgs
  >(ARTIST_LIKE_TOGGLE);

  // const {data: memberData} = useQuery<>();

  const onClickLikeArtist = async () => {
    try {
      const result = await artistLikeToggle({
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
      console.log(result);
      Modal.success({ content: "이 버스커를 찜했습니다." });
    } catch (error) {
      if (error instanceof Error) alert(error);
    }
  };

  const onClickMoveEdit = () => {
    void router.push(`/artistdetail/${router.query.id}/edit`);
  };

  return (
    <ArtistDetailUI
      data={data}
      onClickLikeArtist={onClickLikeArtist}
      onClickMoveEdit={onClickMoveEdit}
    />
  );
};

export default ArtistDetail;
