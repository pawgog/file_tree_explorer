import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

import TreeNode from "../components/TreeNode";
import Search from "../components/Search";
import NoData from "../components/NoData";

import { useTree } from "../context/useTree";
import type { Node } from "../type";

export default function TreePage() {
  const { tree } = useTree();

  if (!tree || (Array.isArray(tree) && tree.length === 0)) {
    return <NoData />;
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-green-600 transition-colors group"
          >
            <div className="p-1.5 rounded-full group-hover:bg-green-50 transition-colors">
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
            </div>
            Back to home page
          </Link>
        </div>
        <div className="mb-8 border-b border-gray-200 pb-6">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            File Explorer
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage your JSON file structure with ease
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 min-h-100">
          <Search />
          <div className="mt-6 overflow-x-auto">
            <TreeNode node={tree as unknown as Node} level={0} path="" />
          </div>
        </div>
      </div>
    </div>
  );
}
