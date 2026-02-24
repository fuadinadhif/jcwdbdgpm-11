import { createContext, useContext } from "react";

export const UserContext = createContext<null | { username: string }>(null);

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
