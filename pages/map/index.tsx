import { useRecoilState } from "recoil";
import { userPositionState } from "../../src/commons/store";
import KakaoMap from "../../src/components/common/kakaoMap";

export default function KaKaoMapPage() {
  const [userPosition] = useRecoilState(userPositionState);

  return <KakaoMap position={userPosition} />;
}
