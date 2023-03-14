import React, { useContext } from "react";
import { LibraryContext } from "../../../../../store/library-context";
import { Member } from "./Member";
import styles from "./memberslist.module.scss";
export const MembersList = () => {
  const libCtx = useContext(LibraryContext);
  return (
    <>
      <ul className={styles.wrapper}>
        {libCtx.library.members.map((member: any, index) => {
          return <Member member={member} key={index} />;
        })}
      </ul>
    </>
  );
};
