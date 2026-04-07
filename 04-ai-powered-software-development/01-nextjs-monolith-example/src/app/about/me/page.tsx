interface UserDataInterface {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
}

export default function MePage() {
  // await fetch("http://localhost:8000/api/events")
  // await fetch("api/events")

  // function createUser(userData: UserDataInterface) {}
  // function removeUser(userData: UserDataInterface) {}

  return <h1>Me Page</h1>;
}
