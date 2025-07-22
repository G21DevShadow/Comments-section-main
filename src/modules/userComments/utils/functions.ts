import { type Comment } from "../../../store/slice/types/types";
import { ORDER_DATE } from "./constants";

export const sortedComment = (orderBy: string, comments: Comment[]) => {
  const sortedComments = [...comments];

  if (orderBy === "voted") {
    sortedComments.sort((a, b) => b.score - a.score);
  } else if (orderBy === "new") {
    sortedComments.sort((a, b) => {
      return (
        ORDER_DATE[a.createdAt as keyof typeof ORDER_DATE] -
        ORDER_DATE[b.createdAt as keyof typeof ORDER_DATE]
      );
    });
  } else if (orderBy === "old") {
    sortedComments.sort((a, b) => {
      return (
        ORDER_DATE[b.createdAt as keyof typeof ORDER_DATE] -
        ORDER_DATE[a.createdAt as keyof typeof ORDER_DATE]
      );
    });
  }

  return sortedComments;
};
