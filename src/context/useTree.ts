import { useContext } from "react";

import { TreeContext } from "./ThreeContext";

export const useTree = () => {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error("useTree must be used within a TreeProvider");
  }
  return context;
};
