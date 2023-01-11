import { createContext } from "react";
type UserData = {
  user: { id?: number; name?: string; role?: string };
};

export const UserContext = createContext<UserData>({ user: {} });
