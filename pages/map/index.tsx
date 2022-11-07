import styled from "@emotion/styled";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userPositionState } from "../../src/commons/store";
import KakaoMap from "../../src/components/common/kakaoMap";

export default function KaKaoMapPage() {
  const [userPosition, setUserPosition] = useRecoilState(userPositionState);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(`lat: ${position.coords.latitude}`);
      console.log(`long: ${position.coords.longitude}`);
      setUserPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    <Wrapper>
      <KakaoMap position={userPosition} />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100vh;
`;
