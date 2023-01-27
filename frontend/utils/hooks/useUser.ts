import React, { useContext, useReducer, useState } from "react";
import { LibraryContext } from "../../store/library-context";
import { UserContext } from "../../store/user-context";

type UserData = {
  id?: number;
  name?: string;
  role?: string;
};

type State = {
  userData: UserData;
};

const initialState = {
  userData: {},
};

const actions = {
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER: "LOGOUT_USER",
};

const reducer = (
  state: State,
  action: { type: string; userData: UserData }
) => {
  switch (action.type) {
    case actions.LOGIN_USER:
      return {
        userData: action.userData,
      };
    case actions.LOGOUT_USER: {
      return {
        userData: action.userData,
      };
    }
    default:
      return state;
  }
};

export const useUser = () => {
  const [userExist, setUserExist] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const logUser = (userData: UserData) => {
    console.log("logging", userData);
    dispatch({ type: actions.LOGIN_USER, userData });
    setUserExist(true);
  };
  const logoutUser = (userData: UserData) => {
    dispatch({ type: actions.LOGOUT_USER, userData });
    setUserExist(false);
  };

  const userCtx = useContext(UserContext);
  const libraryCtx = useContext(LibraryContext);
  return { userExist, state, logUser, logoutUser };
};
