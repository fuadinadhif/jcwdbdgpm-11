import { useState, useEffect } from "react";

export default function UseEffectExamplePage() {
  console.log("First line");

  const [counter, setCounter] = useState(0);
  const [anotherCounter, setAnotherCounter] = useState(0);
  const [userData, setUserData] = useState<null | { name: string }[]>(null);

  useEffect(() => {
    console.log("After render");
  }, [anotherCounter]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      console.log(data);
      setUserData(data);
    }

    getData();
  });

  console.log("Second line");

  return (
    <main>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 10)}>
        Counter Increment (+10)
      </button>

      <p>{anotherCounter}</p>
      <button onClick={() => setAnotherCounter(anotherCounter + 10)}>
        Another Counter Increment (+10)
      </button>

      {/* One by One */}
      <ul>
        <li>{userData?.[0].name}</li>
        <li>{userData?.[1].name}</li>
        <li>{userData?.[2].name}</li>
      </ul>

      <ul>
        {userData?.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}

// NOTES
// Array Dependencies
// 1. Kalau tidak ada - callback useEffect akan dijalankan di setiap render
// 2. Kalau kosong - callback useEffect HANYA akan dijalankan di render pertama
// 3. Kalau ada isinya (state) - callback useEffect akan dijalankan di render pertama DAN setiap kali nilai state isinya berubah

// Pure Component
