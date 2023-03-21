import React, { useContext, useEffect } from "react";
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
        {libCtx.library.members.length === 0 && <p>I didn{"'"}t find users.</p>}
      </ul>
    </>
  );
};
