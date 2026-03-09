import { useEffect, useState } from "react";

export default function HomePage() {
  const [events, setEvents] = useState<
    null | { objectId: string; title: string; description: string }[]
  >();

  useEffect(() => {
    async function getEvents() {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/events`,
        {
          method: "GET",
        },
      );
      const data = await response.json();
      setEvents(data);
    }

    getEvents();
  }, []);

  return (
    <main>
      <h1>Home Page</h1>
      <ul>
        {events?.map((event) => (
          <li key={event.objectId}>{event.title}</li>
        ))}
      </ul>
    </main>
  );
}
