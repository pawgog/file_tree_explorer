import { useMemo } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, HardDrive, LayoutGrid } from "lucide-react";

export default function NodeDetailsPage() {
  const { nodePath } = useParams();

  const path = decodeURIComponent(nodePath || "");
  const typeLabel = useMemo(
    () => (Math.random() > 0.5 ? "Folder" : "File"),
    [],
  );
  // Mock data for demonstration

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
            <div>
              <h2 className="text-xl font-bold text-gray-900 leading-tight">
                {path.split("/").slice(-1)[0] || "Root"}
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
              <div className="text-2xl font-bold text-gray-800">500 KB</div>
            </div>
            <div className="bg-white p-6">
              <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <LayoutGrid size={14} /> Type
              </div>
              <div className="text-2xl font-bold text-gray-800">
                {typeLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
