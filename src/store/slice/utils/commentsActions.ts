import { useAppDispatch } from "../../../hooks/store";
import {
  increaseScore,
  decreaseScore,
  addNewComment,
  replyComment,
  updateComment,
  deleteComment,
} from "../commentSlice";
import { type id, type Comment } from "../types/types";

export function useCommentAction() {
  const dispatch = useAppDispatch();

  const IncreaseScore = (id: id) => {
    dispatch(increaseScore(id));
  };
  const DecreaseScore = (id: id) => {
    dispatch(decreaseScore(id));
  };

  const AddNewComment = (comment: Comment) => {
    dispatch(addNewComment(comment));
  };

  const ReplyComment = (id: id, reply: Comment) => {
    dispatch(replyComment({ id, reply }));
  };
  const UpdateComment = (id: id, text: string) => {
    dispatch(updateComment({ id, text }));
  };

  const DeleteComment = (id: id) => {
    dispatch(deleteComment(id));
  };
  return {
    IncreaseScore,
    DecreaseScore,
    AddNewComment,
    ReplyComment,
    UpdateComment,
    DeleteComment,
  };
}
