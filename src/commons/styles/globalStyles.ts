import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 10px;
  }

  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap%22");
`;

export const stylePrimaryColor = "#ff6446";

export const breakPoints = {
  desktop: "(min-width: 992px) and (max-width: 1440px)",
  tablet: "(min-width: 768px) and (max-width: 991px)",
  mobile: "(min-width: 320px) and (max-width: 767px)",
};
