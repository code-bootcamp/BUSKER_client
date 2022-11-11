import styled from "@emotion/styled";
import AOS from "aos";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { sidebarState } from "../../../commons/store";
import {
  breakPoints,
  stylePrimaryColor,
} from "../../../commons/styles/globalStyles";
import Header from "./header";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const router = useRouter();
  const [isOpen] = useRecoilState(sidebarState);

  useEffect(() => {
    AOS.init();
  }, []);

  const onClickMove = (path: string) => async () => {
    await router.push(path);
  };
  return (
    <>
      {isOpen && (
        <Sidebar data-aos="fade-left">
          <MenuUl>
            <MenuLi onClick={onClickMove("/map")}>Map</MenuLi>
            <MenuLi onClick={onClickMove("/myPage")}>MyPage</MenuLi>
            <MenuLi onClick={onClickMove("/login")}>Login</MenuLi>
            <MenuLi onClick={onClickMove("/signup")}>SignUp</MenuLi>
          </MenuUl>
        </Sidebar>
      )}
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

export const Sidebar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  min-width: 250px;
  max-width: 30vw;
  width: 100%;
  height: 100vh;
  background-color: ${stylePrimaryColor};
  z-index: 98;
  padding-top: 100px;
`;

export const MenuUl = styled.ul`
  list-style: none;
`;

export const MenuLi = styled.li`
  padding: 1rem;
  color: white;
  border-bottom: 1px solid white;
  font-size: 2rem;
  margin-left: 10px;
  margin-bottom: 10px;
  text-indent: 3rem;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    font-size: 2.5rem;
    letter-spacing: 3px;
  }
`;
