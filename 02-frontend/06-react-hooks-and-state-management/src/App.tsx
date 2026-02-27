import { BrowserRouter, Routes, Route } from "react-router";

import UseStateExamplePage from "./pages/UseStateExamplePage";
import UseEffectExamplePage from "./pages/UseEffectExamplePage";
import PropDrillingExamplePage from "./pages/PropDrillingExamplePage";
import ReactContextExamplePage from "./pages/ReactContextExamplePage";
import RootLayout from "./layouts/RootLayout";
import ProductListPage from "./pages/ProductListPage";
import ReactOptimizationPage from "./pages/ReactOptimizationPage";
import UseReducerExamplePage from "./pages/UseReducerExample";
import UseRefExamplePage from "./pages/UseRefExamplePage";
import LocalStoragePage from "./pages/LocalStoragePage";
import SessionStoragePage from "./pages/SessionStoragePage";

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
          <Route
            path="react-optimization"
            element={<ReactOptimizationPage />}
          />
          <Route path="use-reducer" element={<UseReducerExamplePage />} />
          <Route path="use-ref" element={<UseRefExamplePage />} />
          <Route path="local-storage" element={<LocalStoragePage />} />
          <Route path="session-storage" element={<SessionStoragePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
