import { useState } from "react";

export function useActivate() {
  const [active, setActive] = useState<true | false>(false);

  const handleActivate = () => {
    setActive(!active);
  };

  return {
    active,
    handleActivate,
  };
}
