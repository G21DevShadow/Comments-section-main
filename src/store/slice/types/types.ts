export type id = number;

export type User = {
  image: string;
  username: string;
};

export interface Comment {
  id: id;
  content: string;
  createdAt: string;
  replyingTo?: string;
  score: number;
  user: User;
  replies: Comment[];
}

export interface ReplyComment {
  id: id;
  reply: Comment;
}
