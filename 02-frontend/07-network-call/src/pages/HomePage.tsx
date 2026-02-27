import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function HomePage() {
  const [articles, setArticles] = useState<
    null | { objectId: string; title: string }[]
  >(null);

  useEffect(() => {
    async function getArticles() {
      const response = await fetch(
        "https://directtent-us.backendless.app/api/data/articles",
      );
      const data = await response.json();
      setArticles(data);
    }

    getArticles();
  }, []);

  return (
    <main>
      <ul>
        {articles?.map((element) => (
          <li>
            <p>{element.title}</p>
            <Link to={`/articles/${element.objectId}`}>Read more</Link>
          </li>
        ))}

        <p>{userData)</p>
      </ul>
    </main>
  );
}
