import React from "react";
import { useUser } from "../utils/hooks/useUser";
import { UserContext } from "../store/user-context";

//provider dla userów

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const { userData } = useUser();
  return (
    <>
      <UserContext.Provider value={{ user: userData }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
