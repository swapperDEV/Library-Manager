import React, { useContext } from "react";
import { LibraryContext } from "../store/library-context";
import { useQuery } from "react-query";
import { libraryType } from "../types/library";
import { UserContext } from "../store/user-context";
import { getLibraryData } from "../utils/functions/getLibraryData";

export const defaultLibraryValue = {
  name: "",
  address: "",
  phone: "",
  coords: [0, 0],
  adminName: "",
  adminPassword: "",
  adminEmail: "",
} as libraryType;

export const LibraryProvider = ({ children }: { children: JSX.Element }) => {
  const userCtx = useContext(UserContext);
  const { isLoading, error, data, isFetching } = useQuery<libraryType>(
    "library",
    () => getLibraryData(userCtx.user.library)
  );
  return (
    <LibraryContext.Provider
      value={{ library: data === undefined ? defaultLibraryValue : data }}
    >
      {isLoading ? (
        <>Loading...</>
      ) : data === undefined ? (
        <>Error</>
      ) : error ? (
        <>Error</>
      ) : (
        children
      )}
    </LibraryContext.Provider>
  );
};
