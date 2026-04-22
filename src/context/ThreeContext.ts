import { createContext } from "react";

import type { Node } from "../type";

interface TreeContextType {
  tree: Node | undefined | null;
  saveTree: (data: Node) => void;
  clearTree: () => void;
}

export const TreeContext = createContext<TreeContextType | null>(null);
