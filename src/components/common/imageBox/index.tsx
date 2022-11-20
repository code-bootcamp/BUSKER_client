import styled from "@emotion/styled";

interface IImageBoxProps {
  src: string;
  width: string;
  height: string;
}

const ImageBox = (props: IImageBoxProps) => {
  return (
    <StyledImageBox style={{ width: props.width, height: props.height }}>
      <StyledImage src={props.src || "/avatar.png"} />
    </StyledImageBox>
  );
};

export default ImageBox;

const StyledImageBox = styled.div`
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
