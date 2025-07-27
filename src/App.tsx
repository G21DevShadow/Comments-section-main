import Post from "./modules/publications/components/post";
import CommentsUser from "./modules/userComments/components/commentsUser";
import { useEffect } from "react";
import { fetchComments } from "./services/asyncComment";
import { useAppDispatch, useAppSelector } from "./hooks/store";
//Sonner
import { Toaster } from "sonner";

function App() {
  const dispatch = useAppDispatch();
  const status = useAppSelector((s) => s.comments.status);

  useEffect(() => {
    if (status === "idle") dispatch(fetchComments());
  }, [status, dispatch]);

  return (
    <main className="grid justify-items-center gap-7 w-[90%] max-w-[1350px] min-h-dvh py-10 mx-auto">
      <Post />
      <Toaster />
      <CommentsUser />
    </main>
  );
}

//Falta agregar la libreria para las notificaciones de una accion
//Despues moverme a la rama main y realizar el merge.
//Seguido realizar el push al repositorio remoto
//Grabar video funcionamiento

export default App;
