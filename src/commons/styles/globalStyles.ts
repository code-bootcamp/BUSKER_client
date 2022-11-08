import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
  }

  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap%22");
`;

export const stylePrimaryColor = "#7D2BBE";

export const breakPoints = {
  desktop: "(min-width: 992px)",
  tablet: "(min-width: 768px) and (max-width: 991px)",
  mobile: "(max-width: 767px)",
};

export const boxShadow = "2px 3px 10px 2px rgba(0, 0, 0, 0.2)";
