import * as yup from "yup";

export const ArtRegisterYup = yup.object({
  contents: yup.string().required("공연 내용을 입력해 주세요."),
  genre: yup.string().required("공연장르를 입력해 주세요"),
  place: yup.string().required("공연장소는 필수입니다"),
  time: yup
    .string()
    .min(2, "공연시간을 설정해주세요")
    .required("공연시간을 설정해주세요"),
});
