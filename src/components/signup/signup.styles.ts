import styled from "@emotion/styled";
import { stylePrimaryColor } from "../../commons/styles/globalStyles";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignupTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  border-bottom: 2px solid gray;
  margin-bottom: 2rem;
  padding: 2rem 0;
`;

export const SignupInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignupWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  align-items: center;
`;

export const LogoStyle = styled.div`
  font-size: 5rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const BtnStyle = styled.button`
  width: 40%;
  font-size: 2rem;
  margin-top: 1rem;
  color: ${stylePrimaryColor};
  font-weight: 600;
  background: none;
  border: 1px solid ${stylePrimaryColor};
  border-radius: 1rem;
  height: 3rem;
  cursor: pointer;
  height: 50px;
  :hover {
    background-color: ${stylePrimaryColor};
    color: white;
  }
`;

export const ErrorStyle = styled.div`
  font-size: 1.3rem;
  color: red;
`;
