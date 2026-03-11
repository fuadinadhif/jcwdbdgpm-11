import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import CreateEventPage from "./pages/CreateEventPage";
import EventListPage from "./pages/EventListPage";
import EventDetailPage from "./pages/EventDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventListPage />} />
        <Route path="/events/create" element={<CreateEventPage />} />
        <Route path="/events/:objectId" element={<EventDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
