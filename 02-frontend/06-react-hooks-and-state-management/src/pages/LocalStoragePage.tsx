import { useState } from "react";

export default function LocalStoragePage() {
  const [counter, setCounter] = useState(() => {
    const oldCounter = localStorage.getItem("counter");

    if (!oldCounter) {
      return 0;
    } else {
      return JSON.parse(oldCounter);
    }
  });

  function increment() {
    const newCounter = counter + 1;
    setCounter(newCounter);
    localStorage.setItem("counter", JSON.stringify(newCounter));
  }

  function decrement() {
    const newCounter = counter - 1;
    setCounter(newCounter);
    localStorage.setItem("counter", JSON.stringify(newCounter));
  }

  return (
    <main>
      <h1>Local Storage</h1>

      <p>{counter}</p>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </main>
  );
}
