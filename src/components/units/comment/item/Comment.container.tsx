import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteCommentArgs,
  IMutationUpdateCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_COMMENT } from "../list/CommentList.queries";
import CommentUI from "./Comment.presenter";
import { DELETE_COMMENT, UPDATE_COMMENT } from "./Comment.queries";
import { ICommentProps } from "./Comment.types";

const Comment = ({ data }: ICommentProps) => {
  const router = useRouter();
  const [deleteComment] = useMutation<
    Pick<IMutation, "deleteComment">,
    IMutationDeleteCommentArgs
  >(DELETE_COMMENT);

  const [updateComment] = useMutation<
    Pick<IMutation, "updateComment">,
    IMutationUpdateCommentArgs
  >(UPDATE_COMMENT);

  const [comment, setComment] = useState("");
  const [isEdit, setIsEdit] = useState(true);
  const onClickEdit = (id: string) => async () => {
    setIsEdit((prev) => !prev);
    if (!isEdit) {
      try {
        await updateComment({
          variables: { content: comment, commentId: id },
          update(cache) {
            cache.modify({
              fields: () => {},
            });
          },
        });
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };
  const onClickDelete = (id: string) => async () => {
    try {
      await deleteComment({
        variables: { commentId: id },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: { boardId: router.query.id },
          },
        ],
      });
      Modal.success({ content: "댓글이 삭제되었습니다." });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onEditComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };
  return (
    <CommentUI
      comment={comment}
      data={data}
      isEdit={isEdit}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      onEditComment={onEditComment}
    />
  );
};

export default Comment;
