import React from "react";
import styles from "./button.module.scss";
export const Button = ({ children }: { children: JSX.Element }) => {
  return <button className={styles.button}>{children}</button>;
};
