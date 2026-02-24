/* -------------------------------------------------------------------------- */
/*                                MULTIPLE FILE                               */
/* -------------------------------------------------------------------------- */
import { useUser } from "../context/UserContext";
import { UserProvider } from "../context/UserProvider";

export default function ReactContextExamplePage() {
  return (
    <UserProvider>
      <main className="border p-12">
        <h1>Prop Drilling</h1>
        <Level1 />
      </main>
    </UserProvider>
  );
}

function Level1() {
  return (
    <div className="border p-12">
      <h2>Level 1</h2>
      <Level2 />
    </div>
  );
}

function Level2() {
  return (
    <div className="border p-12">
      <h3>Level 2</h3>
      <Level3 />
    </div>
  );
}

function Level3() {
  return (
    <div className="border p-12">
      <h4>Level 3</h4>
      <Level4 />
    </div>
  );
}

function Level4() {
  // 3. Consume global state directly
  const user = useUser();

  return (
    <div className="border p-12">
      <h5>Level 4</h5>
      <p>My username is {user?.username}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  ONE FILE                                  */
/* -------------------------------------------------------------------------- */
// import { createContext, useContext } from "react";

// // 1, Create context
// const UserContext = createContext<null | { username: string }>(null);

// export default function ReactContextExamplePage() {
//   const username = "Budiman";

//   return (
//     <main className="border p-12">
//       {/* 2. Provide global state */}
//       <UserContext.Provider value={{ username }}>
//         <h1>Prop Drilling</h1>
//         <Level1 />
//       </UserContext.Provider>
//     </main>
//   );
// }

// function Level1() {
//   return (
//     <div className="border p-12">
//       <h2>Level 1</h2>
//       <Level2 />
//     </div>
//   );
// }

// function Level2() {
//   return (
//     <div className="border p-12">
//       <h3>Level 2</h3>
//       <Level3 />
//     </div>
//   );
// }

// function Level3() {
//   return (
//     <div className="border p-12">
//       <h4>Level 3</h4>
//       <Level4 />
//     </div>
//   );
// }

// function Level4() {
//   // 3. Consume global state directly
//   const user = useContext(UserContext);

//   return (
//     <div className="border p-12">
//       <h5>Level 4</h5>
//       <p>My username is {user?.username}</p>
//     </div>
//   );
// }
