import { type id } from "../../../store/slice/types/types";
//Comments action
import { useCommentAction } from "../../../store/slice/utils/commentsActions";
type prop = {
  id: id;
  handleClick: () => void;
};
export function ModalComment({ id, handleClick }: prop) {
  const { DeleteComment } = useCommentAction();

  const handleDeleteComment = (isDelete: boolean = false) => {
    handleClick();
    if (!isDelete) return;
    DeleteComment(id);
  };
  return (
    <section className="absolute left-0 top-0 grid place-items-center h-full w-full bg-Dark-blue/50">
      <div className=" w-[360px] h-56 p-5 bg-white rounded-2xl">
        <div className="grid grid-rows-[32px_1fr_40px] gap-4 h-full">
          <h2 className="text-lg text-Dark-blue ">Delete Comment</h2>
          <p className="text-Grayish-Blue text-sm">
            Are yo sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <span className="flex gap-6">
            <button
              className="w-36 h-10 text-white bg-Grayish-Blue rounded-lg hover:cursor-pointer hover:bg-Light-grayish-blue duration-200"
              onClick={() => handleDeleteComment()}
            >
              NO, CANCEL
            </button>
            <button
              className="w-36 h-10 text-white bg-Soft-Red rounded-lg hover:cursor-pointer hover:bg-Light-grayish-blue duration-200"
              onClick={() => handleDeleteComment(true)}
            >
              YES, DELETE
            </button>
          </span>
        </div>
      </div>
    </section>
  );
}

//Implementar logica para eliminar el comentario
