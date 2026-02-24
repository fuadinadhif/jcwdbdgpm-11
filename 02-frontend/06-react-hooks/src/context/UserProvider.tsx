import { UserContext } from "./UserContext";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const username = "Budiman";
  return (
    <UserContext.Provider value={{ username }}>{children}</UserContext.Provider>
  );
}
