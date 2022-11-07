import * as yup from "yup";

export const ArtRegisterYup = yup.object({
  contents: yup.string().required("공연 내용을 입력해 주세요."),
  genre: yup.string().required("공연장르를 입력해 주세요"),
  image: yup.string(),
  place: yup.string().required("공연장소는 필수입니다"),
});
