import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 10px;
  }

  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap%22");
`;

export const stylePrimaryColor = "#730fc3";

export const breakPoints = {
  desktop: "(min-width: 992px)",
  tablet: "(min-width: 768px) and (max-width: 991px)",
  mobile: "(max-width: 767px)",
};
