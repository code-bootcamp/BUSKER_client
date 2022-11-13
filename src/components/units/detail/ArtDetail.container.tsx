import { useRouter } from "next/router";
import ArtDetailUI from "./ArtDetail.presenter";

const ArtDetail = () => {
  const router = useRouter();
  return <ArtDetailUI routerId={router.query.id} />;
};

export default ArtDetail;
