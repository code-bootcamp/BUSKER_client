import * as S from "../src/commons/styles/home";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { deviceState, userPositionState } from "../src/commons/store";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const setIsMobile = useSetRecoilState(deviceState);
  const setUserPosition = useSetRecoilState(userPositionState);
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
      <S.Wrapper>
        <S.VideoBox>
          <S.Video autoPlay muted loop playsInline>
            <source src="/streetDance.webm" type="video/webm"></source>
            <source src="/streetDance.mp4" type="video/mp4"></source>
            브라우저가 동영상을 지원하지 않습니다.
          </S.Video>
          <S.MainIntro>
            공허한 길거리에
            <br />
            다채로운 컨텐츠가
            <br />
            가득 수놓아진 세상을 꿈꾸며
          </S.MainIntro>
        </S.VideoBox>
        <S.ContentBox>
          <S.Content>
            <div>
              <S.Title>내가 좋아하는 버스커와</S.Title>
              <S.Intro>
                내가 좋아하는 버스커와 연결고리를 만들어 보실래요?
                <br /> 주위의 라이브 공연을 찾아 연결해보세요.
              </S.Intro>
            </div>
            <S.ImageBoxes>
              <Image
                width={400}
                height={400}
                layout="responsive"
                src="/landing1.jpeg"
              />
            </S.ImageBoxes>
          </S.Content>
          <S.Content>
            <S.ImageBoxes>
              <Image
                width={400}
                height={400}
                layout="responsive"
                src="/landing2.jpeg"
              />
            </S.ImageBoxes>
            <div>
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
