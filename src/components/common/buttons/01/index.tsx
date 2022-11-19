import styled from "@emotion/styled";
import { MouseEvent } from "react";
import { stylePrimaryColor } from "../../../../commons/styles/globalStyles";

interface IButtonProps {
  type?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onSubmit?: () => void;
  disabled?: boolean;
  children?: string | [string, JSX.Element];
  style?: React.CSSProperties;
  fontSize?: number | string;
  id?: string;
}

const Button01 = (props: IButtonProps) => {
  return (
    <ButtonStyle id={props.id} style={props.style} onClick={props.onClick}>
      <>{props.children}</>
    </ButtonStyle>
  );
};

export default Button01;

const ButtonStyle = styled.button`
  border: 1px solid ${stylePrimaryColor};
  background-color: white;
  padding: 0.5rem 1.5rem;
  font-size: 1.4rem;
  border-radius: 5px;
  color: ${stylePrimaryColor};
  cursor: pointer;
`;
