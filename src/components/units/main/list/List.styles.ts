import styled from "@emotion/styled";
import { stylePrimaryColor } from "../../../../commons/styles/globalStyles";

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${stylePrimaryColor};
`;

export const OptionBox = styled.div`
  width: 100%;
  height: 100px;
  background: rgb(113, 0, 189);
  background: linear-gradient(
    90deg,
    rgba(113, 0, 189, 1) 0%,
    rgba(153, 0, 255, 1) 50%,
    rgba(113, 0, 189, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;

  .ant-cascader {
    width: 100%;
  }

  .ant-select {
    outline: none !important;
    min-width: 100px;
  }

  .ant-select-selector {
    background-color: transparent !important;
    border: none !important;
    border-bottom: 1px solid white !important;

    & span {
      font-size: 1.3rem;
      background-color: transparent;
    }
  }

  .ant-select-selector input {
    color: white;
  }

  .ant-select-arrow {
    color: white;
  }

  .ant-select-clear {
    background-color: #9900ff;
    color: white;
  }

  .ant-select-selection-item {
    color: white;
    background-color: #9900ff;
  }

  .ant-select-selection-item-remove {
    color: white;
  }
`;

export const LocationOptionBox = styled.div``;

export const GenreOptionBox = styled.div``;

export const ListBox = styled.ul`
  height: 100%;
  & > div {
    display: grid;
    grid-auto-flow: row dense;
    grid-auto-rows: minmax(min-content, max-content);
    gap: 2%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 0 30px;
    padding-top: 2rem;
  }
  list-style: none;
`;
