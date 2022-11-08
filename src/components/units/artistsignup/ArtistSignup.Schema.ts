import * as yup from "yup";

export const ArtistSignupYup = yup.object({
  name: yup.string().required("팀명을 입력해주세요"),
  address: yup.string().required("공연장소는 필수입니다"),
  genre: yup.string().required("공연 주장르를 설정해 주세요"),
  remarks: yup.string().required("소개글을 적어주세요"),
  Link: yup.string(),
  memberName: yup.string(),
  memberRole: yup.string(),
});
