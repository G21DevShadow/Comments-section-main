//Types
import { type Comment } from "../../../store/slice/types/types";
//Hook
import { useViewReplies } from "../hooks/viewReplies";
//React
import React from "react";
//Components
import { CommentsScore } from "./commentsScore";
import { CommentBody } from "./commentBody";
import { Form } from "./form";

export function Comment({
  id,
  user,
  content,
  createdAt,
  score,
  replies = [],
}: Comment) {
  const { view: viewReplies, handleView: handleViewReplies } = useViewReplies();
  const { view: viewReply, handleView: handleViewReply } = useViewReplies();

  const handleClickReplies: React.ComponentProps<"a">["onClick"] = (e) => {
    e.preventDefault();
    handleViewReplies();
  };

  return (
    <div className="grid justify-items-end gap-5 w-full">
      <div className="relative flex gap-10 h-[170px] w-full py-5 px-7 bg-white rounded-xl">
        <CommentsScore score={score} id={id} />
        <CommentBody
          content={content}
          createdAt={createdAt}
          user={user}
          handleClick={handleViewReply}
        />
        {replies.length > 0 && (
          <a
            href="#"
            className="absolute right-7 bottom-5 text-sm text-Moderate-blue font-bold hover:text-Light-grayish-blue duration-200 "
            onClick={handleClickReplies}
          >
            View Replies
          </a>
        )}
      </div>

      {(viewReplies || viewReply) && (
        <div className="grid justify-items-end gap-5 max-h-[510px] w-[98%] min-w-[620px] border-l border-Light-grayish-blue ">
          {viewReply && (
            <div className="w-[98%]">
              <Form isReply={true} id={id} />
            </div>
          )}

          {viewReplies && (
            <div className="grid gap-5 w-[98%] m-h-[370px] overflow-auto">
              {replies.map((reply) => (
                <Comment
                  key={reply.id}
                  id={reply.id}
                  user={reply.user}
                  score={reply.score}
                  createdAt={reply.createdAt}
                  content={reply.content}
                  replies={reply.replies}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
