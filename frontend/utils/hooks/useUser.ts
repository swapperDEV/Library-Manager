import React, { useContext, useState } from "react";
import { UserContext } from "../../store/user-context";

//comunicating with backend
type UserData = {
  id?: number;
  name?: string;
  role?: string;
};

export const useUser = () => {
  const [userData, setUserData] = useState<UserData>({});
  const userCtx = useContext(UserContext);
  return { userData };
};
