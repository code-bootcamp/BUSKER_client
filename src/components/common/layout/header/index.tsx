import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { sidebarState } from "../../../../commons/store";

import { breakPoints } from "../../../../commons/styles/globalStyles";
import Logo from "../../logo";

const Header = () => {
  const [isOpen, setIsOpen] = useRecoilState(sidebarState);
  const onOpenMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div style={{ height: "100px" }}></div>
      <Wrapper>
        <HeaderBox>
          <Logo />
          <Menu>
            <MenuButton onClick={onOpenMenu}>
              <span className={`bar f ${isOpen ? "isClicked" : ""}`}></span>
              <span className={`bar f ${isOpen ? "isClicked" : ""}`}></span>
              <span className={`bar f ${isOpen ? "isClicked" : ""}`}></span>
            </MenuButton>
          </Menu>
        </HeaderBox>
      </Wrapper>
    </>
  );
};

export default Header;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  @media ${breakPoints.mobile} {
    height: 50px;
  }
  background-color: transparent;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  width: 100px;
  height: 100%;
  padding: 1em;
  padding-right: 50px;
  @media ${breakPoints.mobile} {
    padding-right: 0px;
  }
  z-index: 99;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  .bar {
    position: relative;
    display: block;
    width: 30px;
    height: 5px;
    background: black;
    border-radius: 5px;
    transition: 0.3s;
  }

  .bar.isClicked {
    background: white;
  }

  .bar:nth-child(1).isClicked {
    transform: translateY(10px) rotate(45deg) scaleX(1.2);
  }

  .bar:nth-child(2).isClicked {
    transform: scale(0);
  }

  .bar:nth-child(3).isClicked {
    transform: translateY(-10px) rotate(-45deg) scaleX(1.2);
  }
`;
