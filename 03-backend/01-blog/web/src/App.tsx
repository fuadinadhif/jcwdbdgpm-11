import { useEffect, useState } from "react";

export default function App() {
  const [articles, setArticles] = useState<
    null | { id: number; title: string }[]
  >(null);

  useEffect(() => {
    async function getArticles() {
      const response = await fetch("http://localhost:8000/api/articles");
      const data = await response.json();
      setArticles(data.data);
    }

    getArticles();
  }, []);

  return (
    <main>
      <ul>
        {articles?.map((element) => (
          <li>{element.title}</li>
        ))}
      </ul>
    </main>
  );
}
