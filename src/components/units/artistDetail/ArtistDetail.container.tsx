import { useMutation, useQuery } from "@apollo/client";
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
import { IArtistDetailProps } from "./ArtistDetail.types";

const ArtistDetail = ({ artistId }: IArtistDetailProps) => {
  const { data } = useQuery<
    Pick<IQuery, "fetchArtistWithoutAuth">,
    IQueryFetchArtistWithoutAuthArgs
  >(FETCH_ARTIST_WITHOUT_AUTH, { variables: { artistId: artistId ?? "" } });

  const [artistLikeToggle] = useMutation<
    Pick<IMutation, "artistLikeToggle">,
    IMutationArtistLikeToggleArgs
  >(ARTIST_LIKE_TOGGLE);

  const onClickLikeArtist = async () => {
    try {
      await artistLikeToggle({
        variables: {
          artistId: artistId ?? "",
          status: true,
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error);
    }
  };
  return <ArtistDetailUI data={data} onClickLikeArtist={onClickLikeArtist} />;
};

export default ArtistDetail;
