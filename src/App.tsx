import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import TreePage from "./pages/TreePage";
import NodeDetailsPage from "./pages/NodeDetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tree" element={<TreePage />} />
        <Route path="/tree/:nodePath" element={<NodeDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
