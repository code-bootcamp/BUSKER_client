import { DatePicker, Select, Space } from "antd";
import { useRecoilState } from "recoil";
import { userPositionState } from "../../../commons/store";
import Input01 from "../../common/inputs/01";
import KakaoMap from "../../common/kakaoMap";
import * as S from "./artregister.styles";
import { IArtRegisterPageWriteUI } from "./artregister.types";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";

const ArtRegisterPageWriteUI = ({
  onClickAddressOpen,
  isOpen,
  onClickHandleCancel,
  onCompleteAddressSearch,
  address,
  register,
  formState,
  handleSubmit,
  onClickRegister,
  handleChange,
  options,
}: IArtRegisterPageWriteUI) => {
  const { RangePicker } = DatePicker;
  const [userPosition] = useRecoilState(userPositionState);
  const onChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  return (
    <>
      {isOpen && (
        <S.AddressModal visible={true} onCancel={onClickHandleCancel}>
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.MainWrapper onSubmit={handleSubmit(onClickRegister)}>
        공연 등록
        <S.ContentsWrapper>
          <S.ArtContentsWrapper>
            <S.TextStyle>공연설명</S.TextStyle>
            <S.ContentsStyle
              placeholder="설명을 작성해 주세요"
              {...register("contents")}
            ></S.ContentsStyle>
            <div>{formState.errors.contents?.message}</div>
          </S.ArtContentsWrapper>
          <div>
            <S.TextStyle>공연장르</S.TextStyle>
            <Select
              mode="multiple"
              placeholder="Please select"
              onChange={handleChange}
              style={{ width: "100%" }}
              options={options}
            />
          </div>
          <div>
            <S.TextStyle>공연장소 사진</S.TextStyle>
            <S.ImgBtn>
              +
              <S.FileInput type="file" {...register("image")} />
            </S.ImgBtn>
          </div>
          <div>
            <S.TextStyle>시작시간</S.TextStyle>
            <Space direction="vertical" size={12}>
              <RangePicker showTime onChange={onChange} />
            </Space>
          </div>
          <S.AddressWrapper>
            <S.TextStyle>공연 장소</S.TextStyle>
            <S.AddressSearchWrapper>
              <Input01
                type="text"
                readOnly={true}
                value={address}
                register={register("place")}
              />
              <S.AddressSearchBtn type="button" onClick={onClickAddressOpen}>
                주소 검색
              </S.AddressSearchBtn>
            </S.AddressSearchWrapper>
            <div>{formState.errors.contents?.message}</div>
            <S.KakaoWrapper>
              <KakaoMap position={userPosition} address={address} />
            </S.KakaoWrapper>
          </S.AddressWrapper>
          <S.CategoryBtnStyle>등록하기</S.CategoryBtnStyle>
        </S.ContentsWrapper>
      </S.MainWrapper>
    </>
  );
};

export default ArtRegisterPageWriteUI;
