import { useState } from "react";
import { Link } from "react-router";
import { FileText, SearchIcon } from "lucide-react";

import NoData from "./NoData";
import { useTree } from "../context/useTree";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<
    { name: string; path: string | undefined }[]
  >([]);
  const { tree } = useTree();

  if (!tree || (Array.isArray(tree) && tree.length === 0)) {
    return <NoData />;
  }

  const handleSearch = (query: string) => {
    setQuery(query);
    if (!tree) return;
    // search tree function
  };

  return (
    <div className="relative mb-6">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-4 w-4 text-gray-400 group-focus-within:text-green-500 transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Szukaj plików..."
          className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl bg-gray-50/50 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all shadow-sm"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      {query && results.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 max-h-60 overflow-auto py-2">
          {results.map((result: { path: string | undefined }) => (
            <Link
              key={result.path}
              to={`/tree/${encodeURIComponent(result.path || "")}`}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
            >
              <FileText size={14} className="text-gray-400" />
              <span className="truncate">{result.path}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
