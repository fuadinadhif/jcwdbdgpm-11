import { BrowserRouter, Route, Routes } from "react-router";
import CreateArticlePage from "./pages/CreateArticlePage";
import UpdateArticlePage from "./pages/UpdateArticlePage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home (list article) */}
        <Route path="/" element={<HomePage />} />

        {/* Form untuk buat article baru */}
        <Route path="/articles/create" element={<CreateArticlePage />} />

        {/* Article detail */}
        <Route path="/articles/:id" />

        {/* Form untuk update article */}
        <Route path="/articles/:id/update" element={<UpdateArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}
