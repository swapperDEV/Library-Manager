import React, { useState } from "react";
import { useUser } from "../utils/hooks/useUser";
import { UserContext } from "../store/user-context";

//provider dla userów

export const UserProvider = ({
  children,
  data,
}: {
  children: JSX.Element;
  data: any;
}) => {
  const { state, userExist, logUser, logoutUser } = useUser();
  const [loaded, setLoaded] = useState(false);
  if (data) {
    logUser(data);
  }
  return (
    <>
      <UserContext.Provider
        value={{ user: state.userData, userExist, logUser, logoutUser }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
