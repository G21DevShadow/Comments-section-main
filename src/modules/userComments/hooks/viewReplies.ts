import { useState } from "react";

export function useViewReplies() {
  const [view, setView] = useState<true | false>(false);

  const handleView = () => {
    setView(!view);
  };

  return {
    view,
    handleView,
  };
}
