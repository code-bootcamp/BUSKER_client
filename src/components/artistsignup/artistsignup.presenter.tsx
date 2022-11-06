import Input01 from "../common/inputs/01";
import * as S from "./artistsignup.styles";
import { IArtistSignupPageWriteUI } from "./artistsignup.types";

const ArtistSignupPageWriteUI = ({
  onClickSearchAddress,
  isOpen,
  onClickHandleCancel,
  onCompleteAddressSearch,
  onClickTeam,
  isTeam,
  addCount,
  onClickAddTeam,
}: IArtistSignupPageWriteUI) => {
  return (
    <>
      {isOpen && (
        <S.AddressModal visible={true} onCancel={onClickHandleCancel}>
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.MainWrapper>
        <S.ContentsWrapper>
          <S.ContentsTopWrapper>
            <S.ArtistPlaceWrapper>
              <S.ArtistProfileWrapper>
                <S.ImgBtn>
                  +
                  <S.FileInput type="file" />
                </S.ImgBtn>
                <S.TextStyle>아티스트 이름(팀명)</S.TextStyle>
                <div>
                  <Input01 type="text" readOnly={true} />
                </div>
              </S.ArtistProfileWrapper>
              <S.PlaceGenreWrapper>
                <S.MainPlaceGenreWrapper>
                  <S.TextStyle>공연 주장소</S.TextStyle>
                  <button onClick={onClickSearchAddress} type="button">
                    주소찾기
                  </button>
                  <Input01 type="text" readOnly={true} />
                </S.MainPlaceGenreWrapper>
                <S.MainPlaceGenreWrapper>
                  <S.TextStyle>공연 장르</S.TextStyle>
                  <button type="button">선택하기</button>
                  <Input01 type="text" readOnly={true} />
                </S.MainPlaceGenreWrapper>
              </S.PlaceGenreWrapper>
            </S.ArtistPlaceWrapper>
            <S.RemarksLinkWrapper>
              <S.RemarksInputWrapper>
                <S.TextStyle>소개</S.TextStyle>
                <Input01 type="text" placeholder="소개글을 적어주세요" />
              </S.RemarksInputWrapper>
              <S.RemarksInputWrapper>
                <S.TextStyle>SNS링크 또는 유튜브 URL</S.TextStyle>
                <Input01
                  type="text"
                  placeholder="SNS링크 또는 유튜브 URL을 올려주세요"
                />
              </S.RemarksInputWrapper>
            </S.RemarksLinkWrapper>
          </S.ContentsTopWrapper>
          <S.ContentsBottomWrapper>
            <S.AddTeamWrapper>
              <S.TeamBtn type="button" onClick={onClickTeam}>
                팀이신가요?
              </S.TeamBtn>
              {isTeam
                ? new Array(addCount).fill(addCount).map((item) => {
                    return (
                      <>
                        <S.AddTeamInputWrapper>
                          <S.MemberImgBtn>
                            +
                            <S.FileInput type="file" />
                          </S.MemberImgBtn>
                          <Input01 type="text" placeholder="이름" />
                          <Input01 type="text" placeholder="역할" />
                          <S.AddBtn type="button" onClick={onClickAddTeam}>
                            +
                          </S.AddBtn>
                        </S.AddTeamInputWrapper>
                      </>
                    );
                  })
                : ""}
            </S.AddTeamWrapper>
            <S.SubmitBtn>등록하기</S.SubmitBtn>
          </S.ContentsBottomWrapper>
        </S.ContentsWrapper>
      </S.MainWrapper>
    </>
  );
};

export default ArtistSignupPageWriteUI;
