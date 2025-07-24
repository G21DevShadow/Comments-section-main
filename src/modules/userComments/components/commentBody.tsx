import { type ReactNode } from "react";
import { type id } from "../../../store/slice/types/types";
//Component
import { IconReply } from "./ComponentsIcons/reply";
import { IconDelete } from "./ComponentsIcons/delete";
import { IconUpdate } from "./ComponentsIcons/update";
//Hook
import { useActivate } from "../hooks/useActivate";
//Comments actions
import { useCommentAction } from "../../../store/slice/utils/commentsActions";

interface props {
  id: id;
  content: string;
  handleClick: () => void;
  user: string;
  children: ReactNode;
}

export function CommentBody({
  id,
  content,
  handleClick,
  user,
  children,
}: props) {
  const { active: isTxtActive, handleActivate: handleTxtActive } =
    useActivate();
  const { UpdateComment } = useCommentAction();

  const handleUpdateComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new window.FormData(e.currentTarget);
    const txtArea = form.get("txtComment") as string;
    if (!txtArea) {
      return;
    }
    UpdateComment(id, txtArea);
  };

  return (
    <form
      action=""
      className="grid gap-3 w-full"
      onSubmit={handleUpdateComment}
    >
      <div className="flex items-center justify-between">
        {children}
        {(user === "juliusomo" && (
          <div className="flex gap-5">
            <IconDelete />
            <IconUpdate handleClick={handleTxtActive} />
          </div>
        )) || <IconReply handleClick={handleClick} />}
      </div>
      <textarea
        name="txtComment"
        disabled={!isTxtActive}
        className={`self-end max-w-[465px] h-[80px] text-[15px] text-Grayish-Blue py-1.5 px-2.5 rounded-[6px] resize-none outline-none border-2 duration-200 ${
          isTxtActive ? "border-Moderate-blue" : "border-transparent"
        }`}
      >
        {content}
      </textarea>
      {isTxtActive && (
        <button
          type="submit"
          className="justify-self-end w-30 h-11 text-white bg-Moderate-blue rounded-[8px] hover:bg-Light-grayish-blue hover:cursor-pointer duration-200"
        >
          UPDATE
        </button>
      )}
    </form>
  );
}

/*Continuar con la accion de editar el comentario*/
