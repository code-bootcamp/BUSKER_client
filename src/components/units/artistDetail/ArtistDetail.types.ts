import { IQuery } from "../../../commons/types/generated/types";

export interface IArtistDetailProps {
  data?: Pick<IQuery, "fetchArtistWithoutAuth">;
  artistId?: string;
  onClickLikeArtist: () => void;
}
