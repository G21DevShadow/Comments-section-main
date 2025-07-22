import { type Comment } from "../types/types";

export const fallBackComment: Comment[] = [
  {
    id: 1,
    content:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: "1 month ago",
    score: 12,
    user: {
      image: "./assets/images/avatars/image-amyrobson.png",
      username: "amyrobson",
    },
    replies: [],
  },
];

export function loadStorage() {
  try {
    const store = window.localStorage.getItem("comment");
    return store ? (JSON.parse(store) as Comment[]) : [];
  } catch (e) {
    return [];
  }
}

export function savedStorage(comments: Comment[]) {
  window.localStorage.setItem("comment", JSON.stringify(comments));
}

export function nextId(comments: Comment[]) {
  let nextId = 0;

  const verifyNextId = (comment: Comment[]) => {
    for (let i = 0; i < comment.length; i++) {
      let next = comment[i].id;
      if (next > nextId) {
        nextId = next;
      }
      if (comment[i].replies.length) {
        verifyNextId(comment[i].replies);
      }
    }
  };

  verifyNextId(comments);

  return nextId + 1;
}
