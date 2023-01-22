import { createContext } from "react";
type UserData = {
  user: { id?: number; name?: string; role?: string };
  userExist: boolean;
  logoutUser: Function;
  logUser: Function;
};

export const UserContext = createContext<UserData>({
  user: {},
  logUser: () => {},
  logoutUser: () => {},
  userExist: false,
});
