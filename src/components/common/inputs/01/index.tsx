import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { stylePrimaryColor } from "../../../../commons/styles/globalStyles";

interface IProps {
  type: "text" | "password";
  register?: UseFormRegisterReturn;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  value?: string;
}

const LoginInputStyle = styled.input`
  margin: 1rem 0;
  height: 50px;
  font-size: 1.5rem;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  :focus {
    outline: 1px solid ${stylePrimaryColor};
    border: none;
  }
`;

export default function Input01(props: IProps) {
  return (
    <LoginInputStyle
      placeholder={props.placeholder}
      type={props.type}
      {...props.register}
      onChange={props.onChange}
      readOnly={props.readOnly}
      value={props.value}
    />
  );
}
