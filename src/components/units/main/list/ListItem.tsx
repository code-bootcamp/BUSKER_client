import styled from "@emotion/styled";
import { IBoards } from "../../../../commons/types/generated/types";
import { motion } from "framer-motion";

interface IListItemProps {
  board?: IBoards;
  onClickListItem: (id: string) => () => void;
}

const ListItem = ({ board, onClickListItem }: IListItemProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClickListItem(board?.id ?? "")}
      style={{ cursor: "pointer" }}
    >
      <Wrapper>
        <ImageBox>
          <Image
            src={`https://storage.googleapis.com/busker-storage/${
              board?.boardImageURL[0]?.url ?? ""
            }`}
          />
        </ImageBox>
        <ContentBox>
          <span>{board?.artist.active_name}</span>
          <span>{board?.category.name}</span>
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
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
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
