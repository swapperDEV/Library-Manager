import React from "react";
import styles from "./dot.module.scss";
export const Dot = ({ fill }: { fill: boolean }) => {
  return <div className={fill ? styles.dot : styles.dotClear}></div>;
};
