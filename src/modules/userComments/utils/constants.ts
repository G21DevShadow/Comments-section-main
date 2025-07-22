export const COMMENT = {
  id: 0,
  user: {
    image: "./assets/images/avatars/image-juliusomo.png",
    username: "Juliusomo",
  },
  content: "",
  createdAt: "today",
  replyingTo: "",
  score: 0,
  replies: [],
};

export const OPTIONS = [
  { name: "choose option", value: "" },
  { name: "Most Voted", value: "voted" },
  { name: "Newer", value: "new" },
  { name: "Older", value: "old" },
];

export const ORDER_DATE = {
  today: 1,
  "2 weeks ago": 2,
  "1 month ago": 3,
};
