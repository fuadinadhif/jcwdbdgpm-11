import { useState } from "react";

export default function UseStateExamplePage() {
  const [counter, setCounter] = useState(100);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main>
      {/* Counter Example */}
      <div>
        <p>{counter}</p>
        <button
          onClick={() => {
            setCounter(counter + 1);
            console.log(counter);
          }}
          className="border cursor-pointer"
        >
          Increment (+1)
        </button>
      </div>

      {/* Modal Open / Close */}
      <div>
        <button
          className="border cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          Delete Account
        </button>

        {isModalOpen ? (
          <div className="absolute top-0 bottom-0 left-0 right-0 h-screen w-screen bg-[rgba(0,0,0,0.3)] grid place-items-center">
            <div className="bg-white p-16">
              <p>Are you sure?</p>
              <button className="border" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="border">Confirm</button>
            </div>
          </div>
        ) : undefined}
      </div>

      {/* Input */}
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          console.log(email);
          console.log(password);

          // await fetch("http://localhost:8000", {
          //   method: "POST",
          //   body: JSON.stringify({ email, password }),
          // });
        }}
      >
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="yours@mail.com"
            className="border"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="*****"
            className="border"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </main>
  );
}

/* ---------------------------------- NOTES --------------------------------- */
// Destructure
// const students = ["Andi", "Joko"];
// const student1 = students[0];
// const student2 = students[1];
// const [student1, student2] = students;

// console.log(student1);
// console.log(student2);

// Ternary
// if (true) {
//   console.log("Ini benar");
// } else {
//   console.log("Ini salah");
// }

// true ? console.log("Ini benar") : console.log("Ini salah");
