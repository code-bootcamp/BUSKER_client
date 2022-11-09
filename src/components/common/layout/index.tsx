import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { breakPoints } from "../../../commons/styles/globalStyles";
import Header from "./header";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const router = useRouter();
  return (
    <>
      <Header />
      {router.asPath === "/" ? (
        <div>{children}</div>
      ) : (
        <HomeWrapper>{children}</HomeWrapper>
      )}
    </>
  );
};

export default Layout;

export const HomeWrapper = styled.div`
  @media ${breakPoints.desktop} {
    /* background-color: green; */
    /* max-width: 1440px; */
  }
  @media ${breakPoints.tablet} {
    /* background-color: blue; */
    /* max-width: 991px; */
  }
  @media ${breakPoints.mobile} {
    /* background-color: red; */
    /* min-width: 250px; */
  }
  width: 100%;
  margin: 0 auto;
`;
