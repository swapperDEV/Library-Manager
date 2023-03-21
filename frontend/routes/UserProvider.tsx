import React, { useEffect, useState } from "react";
import { useUser } from "../utils/hooks/useUser";
import { UserContext } from "../store/user-context";
import { checkAuth } from "../utils/functions/checkAuth";
import { useRouter } from "next/router";

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();
  const { state, userExist, logUser, logoutUser } = useUser();
  const [loaded, setLoaded] = useState(false);

  const getAuth = async () => {
    const auth = await checkAuth();
    if (auth !== false) {
      logUser(auth.user);
      if (auth.user === null) {
        logoutUser({});
      }
    }
    setLoaded(true);
  };

  useEffect(() => {
    getAuth();
  }, []);
  return (
    <>
      <UserContext.Provider
        value={{ user: state.userData, userExist, logUser, logoutUser }}
      >
        {loaded && children}
      </UserContext.Provider>
    </>
  );
};
