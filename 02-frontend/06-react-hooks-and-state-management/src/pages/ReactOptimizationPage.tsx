import React, { useState } from "react";

export default function ReactOptimizationPage() {
  console.log("Parent rendered");

  const name = "Budiman";
  const [counter, setCounter] = useState(0);

  return (
    <main>
      <h1>React Optimization</h1>

      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>

      <Child name={name} />
    </main>
  );
}

const Child = React.memo(({ name }: { name: string }) => {
  console.log("Child rendered");
  return <h1>Hello my name is {name} </h1>;
});

// NOTES
// 1. React Memo: Untuk menghindari render ulang yang tidak dibutuhkan
// 2. useMemo: Untuk menyimpan hasil fungsi
// 3. useCallback: Untuk menyimpan bentuk fungsi
