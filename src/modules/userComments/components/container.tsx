import { type Comment as Comm } from "../../../store/slice/types/types";

//Components
import { CommentsOrder } from "./commentsOrder";
import { Comment } from "./comment";
//Hook
import { useAppSelector } from "../../../hooks/store";
//Utils
import { OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";
import { sortedComment } from "../utils/functions";

export function Container() {
  const comments = useAppSelector((s) => s.comments.items);
  const [orderBy, setOrderBy] = useState("");
  const [orderedComments, setOrderedComments] = useState<Comm[]>([]);

  const handlerSort = (order: string) => {
    const newOrder = order;
    setOrderBy(newOrder);
  };
  useEffect(() => {
    const result = sortedComment(orderBy, comments);
    setOrderedComments(result);
  }, [orderBy, comments]);

  return (
    <section className="mt-10">
      <CommentsOrder options={OPTIONS} onChange={handlerSort} />
      <section className="grid gap-5 mt-5">
        {orderedComments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            user={comment.user}
            score={comment.score}
            createdAt={comment.createdAt}
            content={comment.content}
            replies={comment.replies}
          />
        ))}
      </section>
    </section>
  );
}
