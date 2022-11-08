import styled from "@emotion/styled";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { deviceState, userPositionState } from "../../src/commons/store";
import { stylePrimaryColor } from "../../src/commons/styles/globalStyles";
import Button01 from "../../src/components/common/buttons/01";
import KakaoMap from "../../src/components/common/kakaoMap";

export default function KaKaoMapPage() {
  const [userPosition, setUserPosition] = useRecoilState(userPositionState);
  const [isMobile] = useRecoilState(deviceState);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserPosition({
        lat: String(position.coords.latitude),
        lng: String(position.coords.longitude),
      });
    });
  }, []);
  return (
    <Wrapper>
      {userPosition.lat === "" ? (
        <div
          style={{
            maxWidth: "1100px",
            width: "100%",
            aspectRatio: `${isMobile ? 1 / 1 : 1.5 / 1}`,
            margin: "0 auto",
          }}
        >
          불러오는 중입니다...
        </div>
      ) : (
        <div
          style={{
            maxWidth: "1100px",
            width: "100%",
            aspectRatio: "2/1",
            position: "relative",
            margin: "0 auto",
          }}
        >
          <KakaoMap address="" position={userPosition} />
          <Button01
            style={{
              position: "absolute",
              bottom: "5px",
              left: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: "2",
              backgroundColor: `${stylePrimaryColor}`,
              color: "white",
            }}
          >
            리스트로 가기
          </Button01>
        </div>
      )}
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
