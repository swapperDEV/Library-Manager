import React from "react";
import { FaBookOpen } from "react-icons/fa";
import styles from "./logo.module.scss";
export const PageLogo = () => {
  return (
    <>
      <header className={styles.header}>
        <a>Lib</a> Manager <FaBookOpen />
      </header>
    </>
  );
};
