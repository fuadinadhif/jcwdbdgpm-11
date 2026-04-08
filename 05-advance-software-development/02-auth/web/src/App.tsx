import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/dashboard/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}
