import Post from "./modules/publications/components/post";
import CommentsUser from "./modules/userComments/components/commentsUser";
import { useEffect } from "react";
import { fetchComments } from "./services/asyncComment";
import { useAppDispatch, useAppSelector } from "./hooks/store";

function App() {
  const dispatch = useAppDispatch();
  const status = useAppSelector((s) => s.comments.status);

  useEffect(() => {
    if (status === "idle") dispatch(fetchComments());
  }, [status, dispatch]);

  return (
    <main className="grid justify-items-center gap-7 w-[90%] max-w-[1350px] min-h-dvh py-10 mx-auto">
      <Post />
      <CommentsUser />
    </main>
  );
}

//pagina del post
//https://themewagon.github.io/boldo/
export default App;
