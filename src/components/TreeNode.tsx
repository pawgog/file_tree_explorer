import { useState } from "react";
import { Link } from "react-router";
import {
  ChevronDown,
  ChevronRight,
  FileText,
  Folder,
  FolderOpen,
} from "lucide-react";

import type { Node } from "../type";

export default function TreeNode({
  node,
  level,
  path,
}: {
  node: Node;
  level: number;
  path: string;
}) {
  const [open, setOpen] = useState(true);
  const currentPath = path ? `${path}/${node?.name}` : node?.name;

  const indent = { paddingLeft: `${level * 1.5}rem` };

  const isFile = node?.type === "file";

  return (
    <div className="select-none">
      <div
        style={indent}
        className={`group flex items-center py-1 px-2 rounded-lg cursor-pointer transition-colors duration-150 ${
          isFile ? "hover:bg-gray-50" : "hover:bg-teal-50/50"
        }`}
        onClick={() => !isFile && setOpen(!open)}
      >
        {!isFile && (
          <span className="mr-1 text-gray-400 group-hover:text-teal-500">
            {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </span>
        )}
        <div className="mr-2">
          {isFile ? (
            <FileText className="w-4 h-4 text-gray-400 group-hover:text-green-500 transition-colors" />
          ) : open ? (
            <FolderOpen className="w-4 h-4 text-teal-500 fill-teal-50" />
          ) : (
            <Folder className="w-4 h-4 text-teal-400 fill-teal-50/30" />
          )}
        </div>
        {isFile ? (
          <Link
            to={`/tree/${encodeURIComponent(currentPath || "")}`}
            className="text-sm text-gray-600 hover:text-green-600 hover:underline decoration-green-300 underline-offset-4 font-medium transition-all"
          >
            {node?.name}
          </Link>
        ) : (
          <span
            className={`text-sm font-semibold ${open ? "text-gray-900" : "text-gray-700"}`}
          >
            {node?.name}
          </span>
        )}
      </div>
      {!isFile && open && (
        <div className="border-l border-gray-100 ml-[0.7rem]">
          {node?.children?.map((child: Node) => (
            <TreeNode
              key={child?.name}
              node={child}
              level={level + 1}
              path={currentPath || ""}
            />
          ))}
        </div>
      )}
    </div>
  );
}
