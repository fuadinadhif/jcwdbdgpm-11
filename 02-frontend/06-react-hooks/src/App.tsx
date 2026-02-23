import { BrowserRouter, Routes, Route } from "react-router";

import UseStateExamplePage from "./pages/UseStateExamplePage";
import UseEffectExamplePage from "./pages/UseEffectExamplePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="use-state" element={<UseStateExamplePage />} />
        <Route path="use-effect" element={<UseEffectExamplePage />} />
      </Routes>
    </BrowserRouter>
  );
}
