import { Link, useParams } from "react-router";
import {
  ArrowLeft,
  Database,
  FileText,
  Folder,
  HardDrive,
  LayoutGrid,
} from "lucide-react";

import { findNode, formatSize, calculateFolderSize } from "../utils";
import { useTree } from "../context/useTree";
import type { Node } from "../type";

export default function NodeDetailsPage() {
  const { nodePath } = useParams();
  const { tree } = useTree();

  const path = decodeURIComponent(nodePath || "");
  const node = findNode(tree, path);

  if (!tree || !node) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500 mb-4 font-medium">
            Node not found: {path}
          </p>
          <Link
            to="/"
            className="text-green-600 hover:underline flex items-center justify-center gap-2"
          >
            <ArrowLeft size={16} /> Back to home page
          </Link>
        </div>
      </div>
    );
  }

  const isFile = node.type === "file";
  const totalSize = isFile ? node.size : calculateFolderSize(node);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/tree"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition-colors mb-6 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Files Tree
        </Link>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 bg-slate-50/50 flex items-center gap-4">
            <div
              className={`p-3 rounded-xl ${isFile ? "bg-green-100 text-green-600" : "bg-teal-100 text-teal-600"}`}
            >
              {isFile ? <FileText size={24} /> : <Folder size={24} />}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 leading-tight">
                {node.name}
              </h2>
              <p className="text-xs text-gray-400 font-mono mt-1 break-all uppercase tracking-wider">
                {path}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-gray-100 border-b border-gray-100">
            <div className="bg-white p-6">
              <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <HardDrive size={14} /> Size
              </div>
              <div className="text-2xl font-bold text-gray-800">
                {formatSize(totalSize || 0)}
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                {isFile ? <Database size={14} /> : <LayoutGrid size={14} />}
                {isFile ? "Type" : "Content"}
              </div>
              <div className="text-2xl font-bold text-gray-800">
                {isFile ? "File" : `${node.children?.length || 0} items`}
              </div>
            </div>
          </div>
          {!isFile && node.children && (
            <div className="p-6">
              <h3 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-tight">
                Folder Contents
              </h3>
              <div className="space-y-2">
                {node.children.map((child: Node) => (
                  <div
                    key={child?.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors border border-transparent hover:border-green-100 group"
                  >
                    {child?.type === "file" ? (
                      <FileText size={16} className="text-gray-400" />
                    ) : (
                      <Folder size={16} className="text-teal-400" />
                    )}
                    <span className="text-sm text-gray-700 group-hover:text-green-700 font-medium">
                      {child?.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
