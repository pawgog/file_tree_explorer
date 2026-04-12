export default function HomePage() {
  const handleInputChange = (value: string) => {
    console.log("handleInputChange", value);
  };

  const handleLoad = () => {
    console.log("handleLoad");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-8 bg-white backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 transition-all">
        <div className="flex flex-col items-center mb-6 text-center">
          <div className="p-2.5 bg-green-600 rounded-lg shadow-lg shadow-green-100 mb-4">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-800">Import JSON</h1>
          <p className="text-sm text-gray-500 mt-1">
            Paste your JSON file structure here to visualize and manage it with
            our file explorer.
          </p>
        </div>
        <div className="relative group">
          <textarea
            rows={8}
            className="w-full p-4 font-mono text-[13px] text-gray-700 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all outline-none resize-none"
            placeholder='{ "name": "root", ... }'
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleLoad}
            className="flex-2 py-3 px-6 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-medium rounded-xl transition-all active:scale-[0.98] shadow-md shadow-green-100 flex items-center justify-center gap-2 group"
          >
            Load Tree
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
