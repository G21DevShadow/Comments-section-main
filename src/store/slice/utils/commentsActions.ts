import { useAppDispatch } from "../../../hooks/store";
import { increaseScore, addNewComment, replyComment } from "../commentSlice";
import { type id, type Comment } from "../types/types";

export function useCommentAction() {
  const dispatch = useAppDispatch();

  const IncreaseScore = (id: id) => {
    dispatch(increaseScore(id));
  };

  const AddNewComment = (comment: Comment) => {
    dispatch(addNewComment(comment));
  };

  const ReplyComment = (id: id, reply: Comment) => {
    dispatch(replyComment({ id, reply }));
  };

  return {
    IncreaseScore,
    AddNewComment,
    ReplyComment,
  };
}
