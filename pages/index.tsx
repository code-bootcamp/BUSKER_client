import * as S from "../src/commons/styles/home";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { deviceState, userPositionState } from "../src/commons/store";
import Head from "next/script";
import { useQuery } from "@apollo/client";
import { IQuery } from "../src/commons/types/generated/types";
import { FETCH_USER } from "../src/components/units/myPage/detail/MyPageDetail.queries";

export default function Home() {
  const router = useRouter();
  // const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);
  const [, setIsMobile] = useRecoilState(deviceState);
  const [, setUserPosition] = useRecoilState(userPositionState);
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

  return (
    <>
      <Head>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </Head>
      <S.Wrapper>
        <S.VideoBox>
          <S.Video
            src="/streetDance.mp4"
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
          ></S.Video>
          <S.MainIntro data-aos="fade-up" data-aos-duration="3000">
            공허한 길거리에
            <br />
            다채로운 컨텐츠가
            <br />
            가득 수놓아진 세상을 꿈꾸며
          </S.MainIntro>
        </S.VideoBox>
        <S.ContentBox>
          <S.Content>
            <div data-aos="fade-right" data-aos-duration="1000">
              <S.Title>내가 좋아하는 버스커와</S.Title>
              <S.Intro>
                내가 좋아하는 버스커와 연결고리를 만들어 보실래요?
                <br /> 주위의 라이브 공연을 찾아 연결해보세요.
              </S.Intro>
            </div>
            <S.ImageBoxes data-aos="fade-left" data-aos-duration="1000">
              <S.Image src="/landing1.jpeg" />
            </S.ImageBoxes>
          </S.Content>
          {typeof window !== "undefined" && window.outerWidth < 920 ? (
            <S.Content>
              <div data-aos="fade-right" data-aos-duration="1000">
                <S.Title
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "right",
                  }}
                >
                  무료한 하루에 특별한
                  <br /> 시간을 보내고 싶나요?
                </S.Title>
                <S.Intro>
                  주변에 있는 버스커들의 특별한 컨텐츠를 즐겨보세요
                </S.Intro>
              </div>
              <S.ImageBoxes data-aos="fade-left" data-aos-duration="1000">
                <S.Image src="/landing2.jpeg" />
              </S.ImageBoxes>
            </S.Content>
          ) : (
            <S.Content>
              <S.ImageBoxes data-aos="fade-right" data-aos-duration="1000">
                <S.Image src="/landing2.jpeg" />
              </S.ImageBoxes>
              <div data-aos="fade-left" data-aos-duration="1000">
                <S.Title
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "right",
                  }}
                >
                  무료한 하루에 특별한
                  <br /> 시간을 보내고 싶나요?
                </S.Title>
                <S.Intro>
                  주변에 있는 버스커들의 특별한 컨텐츠를 즐겨보세요
                </S.Intro>
              </div>
            </S.Content>
          )}
        </S.ContentBox>
        <S.LastContent>
          <S.GoToMainButton
            onClick={async () => await router.push("/main/list")}
          >
            버스킹 즐기러 가기{" "}
          </S.GoToMainButton>
        </S.LastContent>
      </S.Wrapper>
    </>
  );
}
