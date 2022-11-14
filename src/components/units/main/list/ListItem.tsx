import { motion } from "framer-motion";

import styled from "@emotion/styled";
const ListItem = ({ board, onClickListItem }: any) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClickListItem(board.id)}
      style={{ cursor: "pointer" }}
    >
      <Wrapper>
        <ImageBox></ImageBox>
        <ContentBox>
          <span>{board?.artist.active_name}</span>
          <span>{board?.category.name}</span>
          <span>{board?.isShowTime ? "진행중" : "종료됨"}</span>
        </ContentBox>
      </Wrapper>
    </motion.div>
  );
};

export default ListItem;

const Wrapper = styled.div`
  max-width: 355px;
  width: 100%;
  aspect-ratio: 1 / 1.2;
`;

const ImageBox = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #ddd;
  border-radius: 15px;
`;

const ContentBox = styled.div`
  padding: 1rem 2rem;
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    font-size: 1.5rem;
  }
`;
