import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function EventDetailPage() {
  const [event, setEvent] = useState<null | {
    title: string;
    description: string;
    price: number;
    created: number;
  }>(null);
  const params = useParams();

  useEffect(() => {
    async function getEventDetail() {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/events/${params.objectId}`,
      );
      const data = await response.json();
      console.log(data);
      setEvent(data);
    }

    getEventDetail();
  }, []);

  console.log(event);

  if (!event) {
    return (
      <main>
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main>
      <h1>{event.title}</h1>
      <span>Price: {event.price}</span>
      <span>Created: {new Date(event.created).toISOString()}</span>
      <p>{event.description}</p>
    </main>
  );
}
