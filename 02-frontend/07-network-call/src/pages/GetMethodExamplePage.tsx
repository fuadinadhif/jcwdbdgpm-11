import { useEffect, useState } from "react";

export default function App() {
  const [userData, setUserData] = useState<null | { name: string }[]>(null);

  useEffect(() => {
    async function getUserData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        { method: "GET" },
      );
      const data = await response.json();

      console.log(response);
      console.log(data);

      setUserData(data);
    }

    getUserData();
  }, []);

  return (
    <main>
      <h1>Network Call</h1>
      <ul>
        <li>{userData?.[0].name}</li>
        <li>{userData?.[1].name}</li>
        <li>{userData?.[2].name}</li>
      </ul>

      <ul>
        {[
          <li>{userData?.[0].name}</li>,
          <li>{userData?.[1].name}</li>,
          <li>{userData?.[2].name}</li>,
        ]}
      </ul>

      {/* [{name: "andi"}, {name: "joko"}] */}
      {/* [<li>andi</li>, <li>joko</li>] */}
      <ul>
        {userData?.map((element) => (
          <li>{element.name}</li>
        ))}
      </ul>
    </main>
  );
}
