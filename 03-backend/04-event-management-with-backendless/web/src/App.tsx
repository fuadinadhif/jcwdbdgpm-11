import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import CreateArticlePage from "./pages/CreateArticlePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/create" element={<CreateArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}
