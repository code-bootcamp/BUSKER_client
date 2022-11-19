import { Divider } from "antd";
import ImageBox from "../../common/imageBox";
import * as S from "./ArtistDetail.styles";
import { IArtistDetailProps } from "./ArtistDetail.types";

const ArtistDetailUI = (props: IArtistDetailProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <ImageBox width="150px" height="150px" src="" />
        <S.TypingIntro>
          <div className="typewriter">
            <span>
              안녕하세요.{" "}
              <strong>
                {props.data?.fetchArtistWithoutAuth.active_name ??
                  "아무개ㅁㄴ이럼ㄴ이;ㅏ러"}
              </strong>
              입니다.
            </span>
            <span>
              저의 버스킹 주제는{" "}
              <strong>
                {props.data?.fetchArtistWithoutAuth.category?.name ??
                  "악기 연주"}
              </strong>{" "}
              입니다.
            </span>
          </div>
        </S.TypingIntro>
      </S.Header>
      <Divider />
      <S.ArtistContents>
        <S.ArtistContentsLeft>
          <S.ArtistIntro>
            {props.data?.fetchArtistWithoutAuth.description}
          </S.ArtistIntro>
          <Divider />
          {/* 팀 멤버가 존재한다면 start */}
          <S.CommonTitle>저희 멤버들을 소개할게요!</S.CommonTitle>
          <S.TeamMemberBox>
            {new Array(3).fill(1).map((_, index) => (
              <S.Member key={index}>
                <ImageBox width="50px" height="50px" src="" />
                <S.MemberInfo>
                  <span>멤버{index} </span>
                  <span>멤버{index} 역할</span>
                </S.MemberInfo>
              </S.Member>
            ))}
          </S.TeamMemberBox>
          {/* 팀 멤버가 존재한다면 end */}
        </S.ArtistContentsLeft>
        <S.ArtistContentsRight>
          <S.StickyBox>
            <button onClick={props.onClickLikeArtist}>찜하기</button>
            <button>돌아가기</button>
            <Divider />
            <button>수정하기</button>
          </S.StickyBox>
        </S.ArtistContentsRight>
      </S.ArtistContents>
      <Divider />
      <S.CommonTitle>최근에 이런 공연들을 했어요!</S.CommonTitle>
      <S.RecentArts>
        {new Array(3).fill(1).map((_, index) => (
          <S.RecentArt key={index}>
            공연 장소 이미지랑 공연 언제 했는지(end day) 어디서 했는지(address)
          </S.RecentArt>
        ))}
      </S.RecentArts>
    </S.Wrapper>
  );
};

export default ArtistDetailUI;
