import React, { useContext, useEffect, useState } from "react";
import { LibraryContext } from "../store/library-context";
import { useQuery } from "react-query";
import { libraryType } from "../types/library";
import { UserContext } from "../store/user-context";
import { getLibraryData } from "../utils/functions/getLibraryData";
import { getLibraryMembers } from "../utils/functions/getLibraryMembers";
import { checkAuth } from "../utils/functions/checkAuth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const defaultLibraryValue = {
  name: "",
  address: "",
  phone: "",
  coords: [0, 0],
} as libraryType;

export const LibraryProvider = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();
  const userCtx = useContext(UserContext);
  const [libraryMembers, setLibraryMembers] = useState<[]>([]);
  const { isLoading, error, data, isFetching, refetch } = useQuery<libraryType>(
    "library",
    () => getLibraryData(userCtx.user.library)
  );
  const checkUserAuth = async () => {
    console.log("checking auth");
    if ((await checkAuth()) === false) {
      toast("The session has expired");
      router.push("/logout");
    }
  };
  return (
    <LibraryContext.Provider
      value={{
        library:
          data === undefined
            ? defaultLibraryValue
            : {
                ...data,
                reload: () => {
                  console.log("refetching");
                  refetch();
                },
                checkUserAuth,
              },
      }}
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
