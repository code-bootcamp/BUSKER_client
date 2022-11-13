import styled from "@emotion/styled";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { deviceState, userPositionState } from "../src/commons/store";
import { breakPoints } from "../src/commons/styles/globalStyles";
import Head from "next/script";

export default function Home() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useRecoilState(deviceState);
  const [userPosition, setUserPosition] = useRecoilState(userPositionState);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserPosition({
        lat: String(position.coords.latitude),
        lng: String(position.coords.longitude),
      });
    });
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  }, []);
  console.log("현재 좌표:", userPosition);
  console.log(isMobile ? "데탑아님" : "데탑임");
  return (
    <>
      <Head>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </Head>
      <Wrapper>
        <VideoBox>
          <Video
            src="/streetDance.mp4"
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
          ></Video>
        </VideoBox>
        <button onClick={async () => await router.push("/map")}>
          근처의 버스킹 확인하기
        </button>
        <div style={{ width: "100%", height: "500px" }}>
          <div data-aos="fade-left" className="box">
            <h2 className="title">fade-left</h2>
          </div>
          <div data-aos="fade-right" className="box">
            <h2 className="title">fade-right</h2>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export const Wrapper = styled.div`
  position: relative;
  padding-top: 100vh;
`;

export const VideoBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
  margin: 0;
  @media ${breakPoints.mobile} {
    overflow-x: hidden;
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
  z-index: -1;
`;
