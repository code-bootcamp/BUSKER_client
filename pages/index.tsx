import styled from "@emotion/styled";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  deviceState,
  // districtDataState,
  userPositionState,
} from "../src/commons/store";
import Head from "next/script";
import { FETCH_USER } from "../src/components/units/artistsignup/ArtistSignup.Quries";
import { useQuery } from "@apollo/client";
import { IQuery } from "../src/commons/types/generated/types";
// import { DISTRICT_LIST } from "../src/components/units/main/list/List.queries";
import { breakPoints } from "../src/commons/styles/globalStyles";
export default function Home() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  // const [districtData, setDistrictData] = useRecoilState(districtDataState);
  // const { data: districtList } =
  //   useQuery<Pick<IQuery, "districtList">>(DISTRICT_LIST);

  // useEffect(() => {
  //   setDistrictData(districtList ?? {});
  // }, [districtList]);
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
  console.log(data ? "로그인 상태" : "로그인 안된 상태");
  console.log(typeof window !== "undefined" && window.outerWidth);
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
          <MainIntro data-aos="fade-up" data-aos-duration="3000">
            공허한 길거리에
            <br />
            다채로운 컨텐츠가
            <br />
            가득 수놓아진 세상을 꿈꾸며
          </MainIntro>
        </VideoBox>
        <ContentBox>
          <Content>
            <div data-aos="fade-right" data-aos-duration="1000">
              <Title>내가 좋아하는 버스커와</Title>
              <Intro>
                내가 좋아하는 버스커와 연결고리를 만들어 보실래요?
                <br /> 주위의 라이브 공연을 찾아 연결해보세요.
              </Intro>
            </div>
            <ImageBoxes data-aos="fade-left" data-aos-duration="1000">
              <Image src="/landing1.jpeg" />
            </ImageBoxes>
          </Content>
          {typeof window !== "undefined" && window.outerWidth < 920 ? (
            <Content>
              <div data-aos="fade-right" data-aos-duration="1000">
                <Title
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "right",
                  }}
                >
                  무료한 하루에 특별한
                  <br /> 시간을 보내고 싶나요?
                </Title>
                <Intro>주변에 있는 버스커들의 특별한 컨텐츠를 즐겨보세요</Intro>
              </div>
              <ImageBoxes data-aos="fade-left" data-aos-duration="1000">
                <Image src="/landing2.jpeg" />
              </ImageBoxes>
            </Content>
          ) : (
            <Content>
              <ImageBoxes data-aos="fade-right" data-aos-duration="1000">
                <Image src="/landing2.jpeg" />
              </ImageBoxes>
              <div data-aos="fade-left" data-aos-duration="1000">
                <Title
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "right",
                  }}
                >
                  무료한 하루에 특별한
                  <br /> 시간을 보내고 싶나요?
                </Title>
                <Intro>주변에 있는 버스커들의 특별한 컨텐츠를 즐겨보세요</Intro>
              </div>
            </Content>
          )}
          <button onClick={async () => await router.push("/map")}>
            근처의 버스킹 확인하기
          </button>
        </ContentBox>
      </Wrapper>
    </>
  );
}

export const ImageBoxes = styled.div`
  width: 400px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;

  @media ${breakPoints.mobile} {
    width: 300px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.span`
  font-size: 4rem;
  font-weight: 600;
  color: #9900ffcc;
  @media ${breakPoints.mobile} {
    font-size: 3rem;
  }
`;

export const Intro = styled.p`
  font-size: 2rem;
  font-weight: 500;
  word-break: keep-all;
`;

export const Content = styled.div`
  width: 100%;
  height: 45%;
  margin-top: 8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  :nth-of-type(2) {
    text-align: right;
  }

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  padding-top: 100vh;
`;

export const VideoBox = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0;
  overflow: hidden;
`;

export const MainIntro = styled.p`
  position: absolute;
  top: 55%;
  right: 10vw;
  color: white;
  font-size: 4.5rem;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: 5px;
  margin: 0;

  @media ${breakPoints.tablet} {
    top: 60%;
    font-size: 3.5rem;
    right: 20px;
  }

  @media ${breakPoints.mobile} {
    top: 65%;
    font-size: 2.5rem;
    right: 10px;
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
  z-index: -1;
`;

export const ContentBox = styled.div`
  max-width: 1200px;

  width: 100%;
  margin: 0 auto;
  min-height: 100vh;

  @media ${breakPoints.desktop} {
    padding: 0 3rem;
  }

  @media ${breakPoints.tablet} {
    padding: 0 2rem;
  }

  @media ${breakPoints.mobile} {
    padding: 0 1rem;
  }

  /* @media (max-width: 920px) {
    div:nth-of-type(2) {
      flex-direction: column-reverse;
    }
  } */
`;
