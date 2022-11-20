import { Divider } from "antd";
import getDate from "../../../commons/libraries/getDate";
import Button01 from "../../common/buttons/01";
import ImageBox from "../../common/imageBox";
import * as S from "./ArtistDetail.styles";
import { IArtistDetailProps } from "./ArtistDetail.types";

const ArtistDetailUI = (props: IArtistDetailProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <ImageBox
          width="150px"
          height="150px"
          src={`https://storage.googleapis.com/busker-storage/${String(
            props.data?.fetchArtistWithoutAuth.artistImageURL
          )}`}
        />
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
            {props.data?.fetchArtistWithoutAuth.description ??
              "안녕하세요. 나는 더미 데이터 입니다. 안녕하세요. 나는 더미 데이터 입니다. 안녕하세요. 나는 더미 데이터 입니다. 안녕하세요. 나는 더미 데이터 입니다. 안녕하세요. 나는 더미 데이터 입니다. 안녕하세요. 나는 더미 데이터 입니다. 안녕하세요. 나는 더미 데이터 입니다. 안녕하세요. 나는 더미 데이터 입니다. 안녕하세요. 나는 더미 데이터 입니다. 안녕하세요. 나는 더미 데이터 입니다. 안녕하세요. 나는 더미 데이터 입니다."}
          </S.ArtistIntro>
          <Divider />
          {props.memberData !== undefined &&
          props.memberData?.fetchMembers.length > 0 ? (
            <>
              <S.CommonTitle>저희 멤버들을 소개할게요!</S.CommonTitle>
              <S.TeamMemberBox>
                {props.memberData?.fetchMembers.map((_, index) => (
                  <S.Member key={index}>
                    <ImageBox width="50px" height="50px" src="" />
                    <S.MemberInfo>
                      <span>멤버{index} </span>
                      <span>멤버{index} 역할</span>
                    </S.MemberInfo>
                  </S.Member>
                ))}
              </S.TeamMemberBox>
            </>
          ) : null}
        </S.ArtistContentsLeft>
        <S.ArtistContentsRight>
          <S.StickyBox>
            <Button01 onClick={props.onClickLikeArtist}>찜하기</Button01>
            <Button01 onClick={props.onClickGoBack}>돌아가기</Button01>
            {props.artistData && (
              <Button01 onClick={props.onClickMoveToEdit}>수정하기</Button01>
            )}
          </S.StickyBox>
        </S.ArtistContentsRight>
      </S.ArtistContents>
      <Divider />
      <div style={{ paddingBottom: "100px" }}>
        <S.CommonTitle>최근에 이런 공연들을 했어요!</S.CommonTitle>
        <S.RecentArts>
          {props.fetchRecentBoards?.fetchRecentBoards.map((board, index) => (
            <S.RecentArt key={index}>
              <S.RecentContent>
                <S.RecentImage
                  src={`https://storage.googleapis.com/busker-storage/${board.boardImageURL[0]?.url}`}
                />
              </S.RecentContent>
              <div>
                <span>{getDate(board.end_time)}에 종료됨.</span>
              </div>
            </S.RecentArt>
          ))}
        </S.RecentArts>
      </div>
    </S.Wrapper>
  );
};

export default ArtistDetailUI;
