import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { stylePrimaryColor } from "../../../commons/styles/globalStyles";
import "antd/dist/antd.css";

export const MainWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  width: 100%;
  font-size: 5rem;
`;

export const ContentsWrapper = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  border: 2px solid ${stylePrimaryColor};
  width: 90%;
  max-width: 1100px;
  border-radius: 20px;
`;

export const ArtContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextStyle = styled.div`
  font-size: 1.8rem;
  padding: 10px 0;
`;

export const CategoryBtnStyle = styled.button`
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

export const AddressSearchBtn = styled.button`
  min-width: 100px;
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

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentsStyle = styled.textarea`
  margin: 1rem 0;
  height: 200px;
  font-size: 1.5rem;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  :focus {
    outline: 1px solid ${stylePrimaryColor};
    border: none;
  }
`;

export const ImgBtn = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin-right: 24px;
  background-color: #ccc;
  border-radius: 100px;
  cursor: pointer;
  text-align: center;
  font-size: 2.5rem;
`;

export const FileInput = styled.input`
  display: none;
`;

export const AddressSearchWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  min-width: 200px;
  input {
    width: 30%;
  }
`;

export const KakaoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcodeEmbed)``;
