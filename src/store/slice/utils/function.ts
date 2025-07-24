import type { Comment, id } from "../types/types";

export function ManipulateScore(comment: Comment[], id: id, action: string) {
  const copyComment = [...comment];

  const Increase = (comment: Comment[]) => {
    for (let i = 0; i < comment.length; i++) {
      if (comment[i].id === id) {
        if (action === "comment/increaseScore") {
          comment[i].score += 1;
        } else if (action === "comment/decreaseScore") {
          comment[i].score -= 1;
        }
        return;
      } else if (comment[i].replies.length) {
        Increase(comment[i].replies);
      }
    }
  };
  Increase(copyComment);

  return copyComment;
}

export function AddReply(id: id, reply: Comment, next: id, comment: Comment[]) {
  const copyComment = [...comment];

  const addReply = (comment: Comment[]) => {
    for (let i = 0; i < comment.length; i++) {
      if (comment[i].id === id) {
        comment[i].replies.push({
          ...reply,
          id: next,
          replyingTo: comment[i].user.username,
        });
        return;
      } else if (comment[i].replies.length) {
        addReply(comment[i].replies);
      }
    }
  };

  addReply(copyComment);
  return copyComment;
}

export function UpdateComm(id: id, text: string, comment: Comment[]) {
  const copyComment = [...comment];

  const updateComment = (comment: Comment[]) => {
    for (let i = 0; i < comment.length; i++) {
      if (comment[i].id === id) {
        comment[i].content = text;
        return;
      } else if (comment[i].replies.length) {
        updateComment(comment[i].replies);
      }
    }
  };

  updateComment(copyComment);
  return copyComment;
}
