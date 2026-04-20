import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function NoData({ title = "No Data" }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
      <div className="flex items-center justify-center w-20 h-20 mb-6 bg-teal-100 rounded-full">
        <svg
          className="w-10 h-10 text-teal-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <Link
        to="/"
        className="text-green-600 hover:underline flex items-center justify-center gap-2"
      >
        <ArrowLeft size={16} /> Back to home page
      </Link>
    </div>
  );
}
