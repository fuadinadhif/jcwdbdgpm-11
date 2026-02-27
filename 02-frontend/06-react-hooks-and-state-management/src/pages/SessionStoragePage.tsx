// Counter Example
// import { useState } from "react";

import { useState } from "react";

// export default function SessionStoragePage() {
//   const [counter, setCounter] = useState(() => {
//     const oldCounter = sessionStorage.getItem("counter");

//     if (!oldCounter) {
//       return 0;
//     } else {
//       return JSON.parse(oldCounter);
//     }
//   });

//   function increment() {
//     const newCounter = counter + 1;
//     setCounter(newCounter);
//     sessionStorage.setItem("counter", JSON.stringify(newCounter));
//   }

//   function decrement() {
//     const newCounter = counter - 1;
//     setCounter(newCounter);
//     sessionStorage.setItem("counter", JSON.stringify(newCounter));
//   }

//   return (
//     <main>
//       <h1>Local Storage</h1>

//       <p>{counter}</p>

//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </main>
//   );
// }

// Input Example
export default function SessionStorage() {
  const [email, setEmail] = useState(() => {
    const oldEmail = sessionStorage.getItem("email");

    if (!oldEmail) {
      return "";
    } else {
      return JSON.parse(oldEmail);
    }
  });
  const [password, setPassword] = useState("");

  return (
    <main>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          // send login request

          setEmail("");
          setPassword("");

          sessionStorage.removeItem("email");
          sessionStorage.removeItem("password");
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="yours@mail.com"
          id="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            sessionStorage.setItem("email", JSON.stringify(event.target.value));
          }}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="***"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </main>
  );
}
