import React, { useContext } from "react";
import { LibraryContext } from "../../../../store/library-context";
export const Dashboard = () => {
  const libCtx = useContext(LibraryContext);
  console.log(libCtx);
  return (
    <>
      <p>kseigarnia; {libCtx.library.name}</p>
    </>
  );
};
