// import { IArtist } from "../../../commons/types/generated/types";

import { IQuery } from "../../../commons/types/generated/types";

export interface IArtistDetailProps {
  data?: Pick<IQuery, "fetchArtist">;
}
