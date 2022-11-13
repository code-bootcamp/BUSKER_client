import { Divider } from "antd";
import ImageBox from "../../common/imageBox";
import KakaoMap from "../../common/kakaoMap";
import CommentList from "../comment/list/CommentList.container";
import NewComment from "../comment/new/NewComment.container";
import * as S from "./ArtDetail.styles";
import ImageCarousel from "./ArtImageCarousel";

interface IArtDetailProps {
  routerId: string | string[] | undefined;
}

const ArtDetailUI = (props: IArtDetailProps) => {
  return (
    <S.Wrapper>
      <S.Title>버스커가 보여주는 버스킹 장소를 구경해보세요!</S.Title>
      <ImageCarousel />
      <Divider />
      <S.Title>버스킹 시작까지 ...</S.Title>
      <S.Title>2022.11.18 20:30 ~ 2022.11.18 22:30</S.Title>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "",
          alignItems: "center",
        }}
      >
        <S.Title>어떤 버스킹을 보여주실 건가요?</S.Title>
        <S.Genre># 악기 연주</S.Genre>
      </div>
      <S.ContentBox>
        <S.ArtistInfoBox>
          <ImageBox src="" width="75px" height="75px"></ImageBox>
          <S.ArtistName>아티스트 이름</S.ArtistName>
        </S.ArtistInfoBox>
        <S.Contents>
          오늘은 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구
          저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구
          저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구
          저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구
          저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구
          저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구
          저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구
          저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구
          저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구
          저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구
          저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구
          저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구
          저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구
          저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구
          저쩌구
        </S.Contents>
      </S.ContentBox>
      <Divider />
      <S.Title>
        이번에는 <span>이곳에서</span> 버스킹을 진행해요!
      </S.Title>
      <S.KakaoBox>
        <KakaoMap isMap={false} address="서울 구로구 디지털로 300" />
      </S.KakaoBox>
      <Divider />
      <S.Title>
        버스킹에 대한 <span>코멘트</span>를 남겨주세요!
      </S.Title>
      <NewComment />
      <CommentList boardId={props.routerId} />
    </S.Wrapper>
  );
};

export default ArtDetailUI;
