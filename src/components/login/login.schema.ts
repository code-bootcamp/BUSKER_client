import * as yup from "yup";

export const LoginYup = yup.object({
  email: yup
    .string()
    .email("이메일에는 @가 필수입니다")
    .required("이메일을 적어주세요"),
  password: yup
    .string()
    .max(16, "비밀번호는 최대 16자리입니다!")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
      "알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함한 8자리 이상 입력해주세요"
    )
    .required("비밀번호를 입력해주세요"),
});
