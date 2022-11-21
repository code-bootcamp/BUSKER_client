import { IQuery } from "../../../commons/types/generated/types";

export interface IArtistDetailProps {
  data?: Pick<IQuery, "fetchArtistWithoutAuth">;
  artistId?: string;
  onClickLikeArtist: () => void;
  onClickMoveToEdit: () => void;
  onClickGoBack: () => void;
  artistData?: Pick<IQuery, "fetchArtist">;
  fetchRecentBoards?: Pick<IQuery, "fetchRecentBoards">;
  memberData?: Pick<IQuery, "fetchMembers">;
  likeCount?: Pick<IQuery, "fetchArtistCount">;
  onClickMoveToRecent: (id: string) => () => void;
}
