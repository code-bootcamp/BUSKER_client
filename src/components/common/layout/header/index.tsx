import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/globalStyles";
import Logo from "../../logo";

const Header = () => {
  return (
    <>
      <Wrapper>
        <HeaderBox>
          <Logo />
          <Menu>햄버거 버억</Menu>
        </HeaderBox>
      </Wrapper>
    </>
  );
};

export default Header;

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  height: 100px;
  @media ${breakPoints.mobile} {
    height: 50px;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  width: 100px;
  height: 100%;
  background-color: white;
  padding: 1em;
  padding-right: 50px;
  @media ${breakPoints.mobile} {
    padding-right: 0px;
  }
`;
