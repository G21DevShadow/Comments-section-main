import { useCommentAction } from "../../../store/slice/utils/commentsActions";

type score = {
  id: number;
  score: number;
};

export function CommentsScore({ id, score }: score) {
  const { IncreaseScore, DecreaseScore } = useCommentAction();

  return (
    <span className="flex flex-col items-center justify-center gap-[8px] h-[102px] w-[40px] bg-Very-light-gray rounded-xl">
      <a
        href="#"
        className="text-xl text-Grayish-Blue font-bold hover:text-Moderate-blue duration-200"
        onClick={(e) => {
          e.preventDefault();
          IncreaseScore(id);
        }}
      >
        +
      </a>
      <p className="text-[14px] text-Moderate-blue font-bold">{score}</p>
      <a
        href="#"
        className="text-xl text-Grayish-Blue font-bold hover:text-Moderate-blue duration-200"
        onClick={(e) => {
          e.preventDefault();
          DecreaseScore(id);
        }}
      >
        -
      </a>
    </span>
  );
}
