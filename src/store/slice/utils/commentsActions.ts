import { useAppDispatch } from "../../../hooks/store";
import {
  increaseScore,
  decreaseScore,
  addNewComment,
  replyComment,
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

  return {
    IncreaseScore,
    DecreaseScore,
    AddNewComment,
    ReplyComment,
  };
}
