import React, { useContext } from "react";
import { LibraryContext } from "../../../../store/library-context";
import styles from "./members.module.scss";
export const Members = () => {
  const libCtx = useContext(LibraryContext);
  console.log(libCtx);
  return (
    <div className={styles.wrapper}>
      MEMBERS
      <ul></ul>
    </div>
  );
};
