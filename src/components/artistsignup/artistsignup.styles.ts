import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { stylePrimaryColor } from "../../commons/styles/globalStyles";
import "antd/dist/antd.css";

export const MainWrapper = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 5rem;
`;

export const ContentsWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const ContentsTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;

export const ArtistProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlaceGenreWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ArtistPlaceWrapper = styled.div`
  display: flex;
  gap: 5rem;
  align-items: flex-end;
`;

export const MainPlaceGenreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 50%;
  }
  button {
    height: 3rem;
    width: 30%;
    border-radius: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    color: ${stylePrimaryColor};
    background: none;
    border: 1px solid ${stylePrimaryColor};
    :hover {
      background-color: ${stylePrimaryColor};
      color: white;
    }
  }
`;

export const RemarksLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RemarksInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextStyle = styled.div`
  font-size: 1.8rem;
  padding: 10px 0;
  color: ${stylePrimaryColor};
`;

export const ContentsBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TeamBtn = styled.button`
  height: 3rem;
  width: 30%;
  border-radius: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  color: ${stylePrimaryColor};
  background: none;
  border: 1px solid ${stylePrimaryColor};
  :hover {
    background-color: ${stylePrimaryColor};
    color: white;
  }
`;

export const AddTeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AddTeamInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid ${stylePrimaryColor};
  border-radius: 10px;
  margin: 20px 0;
  padding: 10px;
  width: 80%;
`;

export const AddBtn = styled.button`
  height: 5rem;
  width: 8%;
  border-radius: 1.5rem;
  font-weight: 600;
  font-size: 1.7rem;
  cursor: pointer;
  color: white;
  background: ${stylePrimaryColor};
  border: 1px solid ${stylePrimaryColor};
`;

export const ImgBtn = styled.label`
  display: inline-block;
  width: 36%;
  margin-right: 24px;
  background-color: #ccc;
  border-radius: 100px;
  cursor: pointer;
  text-align: center;
  line-height: 7.6rem;
  font-size: 2.5rem;
`;

export const FileInput = styled.input`
  display: none;
`;

export const MemberImgBtn = styled.label`
  cursor: pointer;
  text-align: center;
  line-height: 7.6rem;
  font-size: 2.5rem;
  border-radius: 100px;
  background-color: #ccc;
  width: 100px;
`;

export const SubmitBtn = styled.button`
  height: 3rem;
  width: 10%;
  border-radius: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  color: ${stylePrimaryColor};
  background: none;
  border: 1px solid ${stylePrimaryColor};
  :hover {
    background-color: ${stylePrimaryColor};
    color: white;
  }
  margin: 40px auto;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcodeEmbed)``;
