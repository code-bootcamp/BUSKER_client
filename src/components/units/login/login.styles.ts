import styled from "@emotion/styled";
import {
  breakPoints,
  stylePrimaryColor,
} from "../../../commons/styles/globalStyles";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: ${breakPoints.desktop};
  width: 100%;
`;

export const LoginOptionWrapper = styled.div`
  display: flex;
  padding-top: 2rem;
  gap: 1rem;
  align-items: center;
`;

export const LoginTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid gray;
  padding: 2rem 0;
  margin-bottom: 2rem;
  width: 100%;
`;

export const LoginOptionStyle = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
`;

export const LoginBtnStyle = styled.button`
  width: 100%;
  font-size: 2rem;
  margin-top: 1rem;
  color: ${stylePrimaryColor};
  font-weight: 600;
  background: none;
  border: 1px solid ${stylePrimaryColor};
  border-radius: 1rem;
  height: 5rem;
  cursor: pointer;
  :hover {
    background-color: ${stylePrimaryColor};
    color: white;
  }
`;

export const SocialLoginGoogleStyled = styled.div`
  width: 100%;
  height: 65px;
  margin: 0.2rem 0;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 50px;
  justify-content: center;
  :hover {
    background-color: #ddd;
  }
  @media ${breakPoints.mobile} {
    width: 250px;
  }
`;

export const LoginBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media ${breakPoints.mobile} {
    width: 250px;
  }
`;

export const LoginMainWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;

export const IconStyle = styled.img`
  width: 18px;
  height: 18px;
`;

export const SocialLogInText = styled.div`
  font-size: 1.5rem;
`;

export const LogoStyle = styled.div`
  font-size: 5rem;
`;

export const ErrorStyle = styled.div`
  font-size: 1.3rem;
  color: red;
`;
