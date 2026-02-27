// import { useState } from "react";
import { useReducer } from "react";

function counterReducer(state: number, action: string) {
  switch (action) {
    case "incrementBy1":
      return state + 1;
    case "incrementBy10":
      return state + 10;
    case "decrementBy1":
      return state - 1;
    case "decrementBy10":
      return state - 10;
    case "reset":
      return 0;
    default:
      return state;
  }
}

export default function UseReducerExamplePage() {
  // const [counter, setCounter] = useState(0);
  const [counter, dispatch] = useReducer(counterReducer, 0);

  // function incrementBy1() {
  //   setCounter(counter + 1);
  // }

  // function incrementBy10() {
  //   setCounter(counter + 10);
  // }

  // function decrementBy1() {
  //   setCounter(counter - 1);
  // }

  // function decrementBy10() {
  //   setCounter(counter - 10);
  // }

  // function reset() {
  //   setCounter(0);
  // }

  return (
    <main>
      <h1>Use Reducer</h1>

      <p>{counter}</p>

      <button onClick={() => dispatch("incrementBy1")}>+1</button>
      <button onClick={() => dispatch("incrementBy10")}>+10</button>
      <button onClick={() => dispatch("decrementBy1")}>-1</button>
      <button onClick={() => dispatch("decrementBy10")}>-10</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      {/* <button onClick={incrementBy1}>+1</button>
      <button onClick={incrementBy10}>+10</button>
      <button onClick={decrementBy1}>-1</button>
      <button onClick={decrementBy10}>-10</button>
      <button onClick={reset}>reset</button> */}
    </main>
  );
}

// NOTES
// useReducer: Bentuk yang lebih rapi dari useState untuk logic yang lebih kompleks
