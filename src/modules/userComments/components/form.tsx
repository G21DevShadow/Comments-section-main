//Hook Action
import { useCommentAction } from "../../../store/slice/utils/commentsActions";
//type
import { type id } from "../../../store/slice/types/types";
//Constants
import { COMMENT } from "../utils/constants";

type prop = {
  isReply?: boolean;
  id?: id;
};
export function Form({ isReply = false, id = 0 }: prop) {
  const { AddNewComment, ReplyComment } = useCommentAction();

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new window.FormData(e.currentTarget);
    const txtArea = form.get("comment") as string;
    if (!txtArea) {
      return;
    }

    COMMENT["content"] = txtArea;

    if (isReply) {
      ReplyComment(id, COMMENT);
      return;
    }
    AddNewComment(COMMENT);
  };

  return (
    <form
      action=""
      onSubmit={handleClick}
      className="flex gap-5 h-fit w-full py-5 px-5 bg-white rounded-lg"
    >
      <img
        src="./assets/images/avatars/image-juliusomo.png"
        alt="Icono de usuario"
        className="w-11 h-11 "
      />
      <textarea
        name="comment"
        id=""
        placeholder="Add to comment"
        className="grow-2 text-[15px] text-Dark-blue h-20 p-2 border border-Light-grayish-blue rounded-md outline-0 resize-none hover:border-Moderate-blue hover:cursor-pointer duration-200"
      ></textarea>
      <button
        type="submit"
        className="h-[45px] text-white font-bold py-2.5 px-7 bg-Moderate-blue rounded-md hover:bg-Light-grayish-blue hover:cursor-pointer duration-200"
      >
        {isReply ? "REPLY" : "SEND"}
      </button>
    </form>
  );
}
