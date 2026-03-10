import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router";

export default function EventListPage() {
  const [events, setEvents] = useState<
    null | { objectId: string; title: string; description: string }[]
  >();
  const [totalEvents, setTotalEvents] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 3;
  const offset = (page - 1) * limit;
  const totalPages = Math.ceil(totalEvents / limit);

  useEffect(() => {
    console.log("Effect run!");

    async function getEvents() {
      // get paginated data
      const paginatedResponse = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/events?pageSize=${limit}&offset=${offset}`,
        {
          method: "GET",
        },
      );
      const paginatedData = await paginatedResponse.json();

      // get all data
      const allResponse = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/events`,
        {
          method: "GET",
        },
      );
      const allData = await allResponse.json();

      setEvents(paginatedData);
      setTotalEvents(allData.length);
    }

    getEvents();
  }, [page]);

  return (
    <main>
      <h1>Event List Page</h1>
      <ul>
        {events?.map((event) => (
          <li key={event.objectId}>
            <span>{event.title}</span>
            <Link to={`/events/${event.objectId}`}>See details...</Link>
          </li>
        ))}
      </ul>

      <div>
        {Array.from({ length: totalPages }).map((element, index) => {
          const pageNumber = index + 1;

          return (
            <button
              key={index}
              onClick={() => {
                setSearchParams({ page: String(pageNumber) });
              }}
              style={{}}
              disabled={page === pageNumber ? true : false}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
    </main>
  );
}
