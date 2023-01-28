import React, { useContext } from "react";
import { LibraryContext } from "../../../../../store/library-context";
export const MembersList = () => {
  const libCtx = useContext(LibraryContext);
  return (
    <>
      <ul>
        {libCtx.library.members.map((member, index) => {
          return <li key={index}>{member}</li>;
        })}
      </ul>
    </>
  );
};
