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
}: IArtistSignupPageWriteUI) => {
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
                <S.ImgBtn>
                  +
                  <S.FileInput type="file" {...register("images")} />
                </S.ImgBtn>
                <S.TextStyle>아티스트 이름(팀명)</S.TextStyle>
                <div>
                  <Input01 type="text" register={register("name")} />
                </div>
                <S.ErrorMsg>{formState.errors.name?.message}</S.ErrorMsg>
              </S.ArtistProfileWrapper>
              <S.PlaceGenreWrapper>
                <S.MainPlaceGenreWrapper>
                  <S.TextStyle>공연 주장소</S.TextStyle>
                  <button onClick={onClickSearchAddress} type="button">
                    주소찾기
                  </button>
                  <Input01
                    type="text"
                    readOnly={true}
                    value={address}
                    register={register("address")}
                  />
                  <S.ErrorMsg>{formState.errors.address?.message}</S.ErrorMsg>
                </S.MainPlaceGenreWrapper>
                <S.MainPlaceGenreWrapper>
                  <S.TextStyle>공연 장르</S.TextStyle>
                  {/* <button type="button">선택하기</button> */}
                  <Select
                    mode="multiple"
                    placeholder="Please select"
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    options={options}
                  />
                  <Input01
                    type="text"
                    readOnly={true}
                    value={genre}
                    register={register("genre")}
                  />
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
                  register={register("remarks")}
                />
                <S.ErrorMsg>{formState.errors.remarks?.message}</S.ErrorMsg>
              </S.RemarksInputWrapper>
              <S.RemarksInputWrapper>
                <S.TextStyle>SNS링크 또는 유튜브 URL</S.TextStyle>
                <Input01
                  type="text"
                  placeholder="SNS링크 또는 유튜브 URL을 올려주세요"
                  register={register("Link")}
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
                            <S.FileInput
                              type="file"
                              {...register("memberImg")}
                            />
                          </S.MemberImgBtn>
                          <Input01
                            type="text"
                            placeholder="이름"
                            register={register("memberName")}
                          />
                          <Input01
                            type="text"
                            placeholder="역할"
                            register={register("memberRole")}
                          />
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
