import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userPositionState } from "../src/commons/store";
import { breakPoints } from "../src/commons/styles/globalStyles";

export default function Home() {
  const router = useRouter();
  const [, setUserPosition] = useRecoilState(userPositionState);
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
      <VideoBox>
        <Video src="/streetDance.mp4" autoPlay muted loop></Video>
      </VideoBox>
      <button onClick={async () => await router.push("/map")}>
        근처의 버스킹 확인하기
      </button>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  position: relative;
  padding-top: 100vh;
  @media ${breakPoints.mobile} {
    padding-top: 50vh;
  }
`;

export const VideoBox = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
  margin: 0;
  @media ${breakPoints.mobile} {
    height: 50vh;
    overflow-x: visible;
    overflow-y: hidden;
  }
`;

export const Video = styled.video`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  filter: brightness(50%);
  @media ${breakPoints.mobile} {
    transform: translate(-60%, -50%);
  }
`;
