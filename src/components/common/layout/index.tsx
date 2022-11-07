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
  background-color: #fffbfd;

  @media ${breakPoints.desktop} {
    /* background-color: green; */
  }
  @media ${breakPoints.tablet} {
    /* background-color: blue; */
  }
  @media ${breakPoints.mobile} {
    /* background-color: red; */
  }
  width: 100%;
  margin: 0 auto;
`;
