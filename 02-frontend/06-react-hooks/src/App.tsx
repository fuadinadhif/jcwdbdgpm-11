import { BrowserRouter, Routes, Route } from "react-router";

import UseStateExamplePage from "./pages/UseStateExamplePage";
import UseEffectExamplePage from "./pages/UseEffectExamplePage";
import PropDrillingExamplePage from "./pages/PropDrillingExamplePage";
import ReactContextExamplePage from "./pages/ReactContextExamplePage";
import RootLayout from "./layouts/RootLayout";
import ProductListPage from "./pages/ProductListPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="use-state" element={<UseStateExamplePage />} />
          <Route path="use-effect" element={<UseEffectExamplePage />} />
          <Route path="prop-drilling" element={<PropDrillingExamplePage />} />
          <Route path="react-context" element={<ReactContextExamplePage />} />
          <Route path="product-list" element={<ProductListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
