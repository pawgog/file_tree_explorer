import { useState, useCallback, useMemo } from "react";

import { TreeContext } from "./ThreeContext";
import type { Node } from "../type";

export const TreeProvider = ({ children }: { children: React.ReactNode }) => {
  const key = "treeData";

  const [tree, setTree] = useState<Node | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return null;
    }
  });

  const saveTree = useCallback((value: Node) => {
    try {
      setTree(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }, []);

  const clearTree = useCallback(() => {
    setTree(null);
    window.localStorage.removeItem(key);
  }, []);

  const value = useMemo(
    () => ({ tree, saveTree, clearTree }),
    [tree, saveTree, clearTree],
  );

  return <TreeContext.Provider value={value}>{children}</TreeContext.Provider>;
};
