import { Select } from "antd";
import Input01 from "../../common/inputs/01";
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
  isEdit,
  onClickSignup,
  handleSubmit,
  register,
  onClickEdit,
  formState,
  address,
  handleChange,
  options,
  genre,
}: // onChangeFile,
// imgUrl,
IArtistSignupPageWriteUI) => {
  return (
    <>
      {isOpen && (
        <S.AddressModal visible={true} onCancel={onClickHandleCancel}>
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.MainWrapper
        onSubmit={
          isEdit ? handleSubmit(onClickEdit) : handleSubmit(onClickSignup)
        }
      >
        <S.ContentsWrapper>
          <S.ContentsTopWrapper>
            <S.ArtistPlaceWrapper>
              <S.ArtistProfileWrapper>
                {/* {imgUrl ? (
                  <>
                    <S.ImgBtn
                      style={{
                        backgroundImage: `url(https://storage.googleapis.com/${imgUrl})`,
                        backgroundColor: "#fff",
                        backgroundSize: "cover",
                      }}
                      htmlFor={"file"}
                    >
                      +
                      <S.FileInput
                        type="file"
                        id={"file"}
                        onChange={onChangeFile}
                      />
                    </S.ImgBtn>
                  </>
                ) : (
                  <>
                    <S.ImgBtn>
                      +
                      <S.FileInput onChange={onChangeFile} type="file" />
                    </S.ImgBtn>
                  </>
                )} */}

                <S.TextStyle>아티스트 이름(팀명)</S.TextStyle>
                <div>
                  <Input01 type="text" register={register("active_name")} />
                </div>
                <S.ErrorMsg>{formState.errors.name?.message}</S.ErrorMsg>
              </S.ArtistProfileWrapper>
              <S.PlaceGenreWrapper>
                <S.MainPlaceGenreWrapper>
                  <S.TextStyle>공연 주장소</S.TextStyle>
                  <button onClick={onClickSearchAddress} type="button">
                    주소찾기
                  </button>
                  <Input01 type="text" readOnly={true} value={address} />
                  <S.ErrorMsg>{formState.errors.address?.message}</S.ErrorMsg>
                </S.MainPlaceGenreWrapper>
                <S.MainPlaceGenreWrapper>
                  <S.TextStyle>공연 장르</S.TextStyle>
                  <Select
                    placeholder="Please select"
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    options={options}
                  />
                  <Input01 type="text" readOnly={true} value={genre} />
                  <S.ErrorMsg>{formState.errors.genre?.message}</S.ErrorMsg>
                </S.MainPlaceGenreWrapper>
              </S.PlaceGenreWrapper>
            </S.ArtistPlaceWrapper>
            <S.RemarksLinkWrapper>
              <S.RemarksInputWrapper>
                <S.TextStyle>소개</S.TextStyle>
                <Input01
                  type="text"
                  placeholder="소개글을 적어주세요"
                  register={register("description")}
                />
                <S.ErrorMsg>{formState.errors.remarks?.message}</S.ErrorMsg>
              </S.RemarksInputWrapper>
              <S.RemarksInputWrapper>
                <S.TextStyle>SNS링크 또는 유튜브 URL</S.TextStyle>
                <Input01
                  type="text"
                  placeholder="SNS링크 또는 유튜브 URL을 올려주세요"
                  register={register("promotion_url")}
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
            <S.SubmitBtn>{isEdit ? "수정하기" : "등록하기"}</S.SubmitBtn>
          </S.ContentsBottomWrapper>
        </S.ContentsWrapper>
      </S.MainWrapper>
    </>
  );
};

export default ArtistSignupPageWriteUI;
